function parseQuery (query) {
  let isId = false;
  let isClass = false;
  let tag = '';
  let id = '';
  let className = '';

  for (var i = 0; i < query.length; i++) {
    const char = query[i];
    if (char === '.') {
      isClass = true;
      isId = false;
      if (className.length > 0) {
        className += ' ';
      }
    } else if (char === '#') {
      isId = true;
      isClass = false;
    } else if (isId) {
      id += char;
    } else if (isClass) {
      className += char;
    } else {
      tag += char;
    }
  }

  return {
    tag: tag || 'div',
    id,
    className
  };
}

export function refs(el){
  let els = el.querySelectorAll('[id]')

  return Array.from(els).reduce((acc, el) => {
    acc[el.id] = el
    return acc
  }, {})  
}

export function view(arr = []){
 let queryStr = arr[0]
 const query = parseQuery(queryStr)
 
 let tag = query.tag
    , props = {class: query.className, id: query.id}
    , children = []
 
 
 
 let el = document.createElement(tag)
 
 let typeSecondArg = typeof arr[1]

 // If it's an object and not an array
 if(typeSecondArg === 'object' && !arr[1].length){
  props = {...props, ...arr[1]}
  children = arr.slice(2)
 } else if (typeSecondArg === 'string') {
    children = [arr[1]]
 } else {
   children = arr.slice(1)
 }
 
 // Apply props
 Object.keys(props).forEach(attr => {
  let prefix = attr.slice(0,2)
  
  // Support event handlers
  if(prefix == 'on') {
    el[attr] = props[attr]
  } else {
    if(props[attr] !== '') {
      el.setAttribute(attr, props[attr])      
    }
  }
 })
 
 // Apply children
 children.forEach(c => {
   if(typeof c === 'string') {
     el.textContent = c
   } else {
     el.appendChild(view(c))
   }
 })
 
 return el
}