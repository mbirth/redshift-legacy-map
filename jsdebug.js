function space(count) {
  var o = '';
  while (count>0) {
    o += ' ';
    count--;
  }
  return o;
}

/**
 * Returns object with all siblings as string
 * @param objName String name of object to be parsed
 * @param depth Number (1 = only values of current object
 *                      2 = values+objects of current object
 *                      3 = values+objects+functions of current object
 *                      4 = values of current and sub-objects
 *                      5 = values+objects of current and sub-objects
 *                      6 = values+functions of current and sub-objects)
 * @param lev Number Internal use - sub-level
 * @return String Pre-formatted with object hierarchy
 */
function getObjectProps(objName, depth, lev) {
  if (lev>50) { return ''; }
  var obj = eval(objName);
  var o = '';
  for (var x in obj) {
    switch (typeof(obj[x])) {
      case 'function':
        if (depth==3 || depth==6) {
          o += space(lev*2) + objName + '.' + x + ' (' + typeof(obj[x]) + ') = { ... }\n';
        }
        break;
      
      case 'object':
        if (depth>=2) {
          switch (x) {
            case 'parent':
              if (depth != 4) {
                o += space(lev*2) + objName + '.' + x + ' ('+typeof(obj[x])+') = { ...PARENT OBJECT... }\n';
              }
              break;
            
            default:
              if (depth>=4) {
                if (x.indexOf(' ') != -1 || objName.indexOf('[') != -1) {
                  obp = getObjectProps(objName+'[\''+x+'\']', depth, lev+1);
                } else {
                  obp = getObjectProps(objName+'.'+x, depth, lev+1);
                }
                if (obp.indexOf('\n')!=-1) {
                  o += space(lev*2) + objName + '.' + x + ' ('+typeof(obj[x])+') = {';
                  o += '\n' + obp;
                  o += space(lev*2)+'}\n';
                } else if (depth!=4) {
                  o += space(lev*2) + objName + '.' + x + ' ('+typeof(obj[x])+') = { ... }\n';
                }
              } else {
                o += space(lev*2) + objName + '.' + x + ' ('+typeof(obj[x])+') = { ... }\n';
              }
              break;
          }
        }
        break;
        
      case 'string':
        o += space(lev*2) + objName + '.' + x + ' (' + typeof(obj[x]) + ') = \'' + obj[x] + '\'\n';
        break;
      
      default:
        o += space(lev*2) + objName + '.' + x + ' (' + typeof(obj[x]) + ') = ' + obj[x] + '\n';
        break;
    }
  }
  return o;
}

function showObject(objName, depth) {  
  alert(getObjectProps(objName, depth, 0));
}

function writeObject(objName, depth) {
  var obp = getObjectProps(objName, depth, 0);
  if (obp.length > 0) {
    document.writeln('<PRE>');
    document.writeln(obp);
    document.writeln('</PRE>');
  }
}

function showParsedHTML() {
  var jsdwin = window.open();
  jsdwin.document.write(document.body.parentNode.outerHTML.replace(/</g, '&lt;'));
 
}