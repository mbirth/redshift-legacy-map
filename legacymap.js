/************************
* LEGACY MAPPING ENGINE *
* written by            *
* Markus Birth          *
* mbirth@webwriters.de  *
************************/

var symbols = new Array();
var map_infos = new Array();
var curx = 1;
var cury = 1;


var symbols_path = 'mapitems/';
var images_path = 'images/';

symbols['#'] = 'building.gif';
symbols['A'] = 'altar.gif';
symbols['a'] = 'building_n.gif';      // door in wall (north/east/south/west)
symbols['b'] = 'building_e.gif';
symbols['c'] = 'building_s.gif';
symbols['d'] = 'building_w.gif';
symbols['F'] = 'building_dns.gif';
symbols['G'] = 'building_dwe.gif';
symbols['e'] = 'building_sn.gif';     // special in wall (shop/shelf)
symbols['f'] = 'building_se.gif';
symbols['g'] = 'building_ss.gif';
symbols['h'] = 'building_sw.gif';
symbols['i'] = 'building_pn.gif';     // person in front of wall
symbols['j'] = 'building_pe.gif';
symbols['k'] = 'building_ps.gif';
symbols['l'] = 'building_pw.gif';
symbols['m'] = 'building_hn.gif';     // hole in wall
symbols['n'] = 'building_he.gif';
symbols['o'] = 'building_hs.gif';
symbols['p'] = 'building_hw.gif';
symbols['q'] = 'building_ln.gif';     // ladder
symbols['r'] = 'building_le.gif';
symbols['s'] = 'building_ls.gif';
symbols['t'] = 'building_lw.gif';
symbols['L'] = 'building_lwe.gif';
symbols['u'] = 'building_wn.gif';     // switch
symbols['v'] = 'building_we.gif';
symbols['w'] = 'building_ws.gif';
symbols['x'] = 'building_ww.gif';
symbols['y'] = 'building_sww.gif';    // switch and shelf
symbols['I'] = 'building_see.gif';
symbols['J'] = 'building_snn.gif';
symbols['K'] = 'building_sss.gif';
symbols['B'] = 'building_swle.gif';   // shelf and ladder
symbols['.'] = 'bush.gif';
symbols['D'] = 'door_h.gif';
symbols['E'] = 'door_v.gif';
symbols['M'] = 'door_magic.gif';
symbols['W'] = 'door_wall.gif';
symbols['H'] = 'hole.gif';
symbols['P'] = 'pillar.gif';
symbols['Q'] = 'pinnacle.gif';
symbols['R'] = 'rock.gif';
symbols[' '] = 'sand.gif';
symbols['!'] = 'sign.gif';
symbols['Z'] = 'sphere.gif';
symbols['N'] = 'statue.gif';
symbols['*'] = 'street.gif';
symbols['S'] = 'switch.gif';
symbols['T'] = 'teleporter.gif';
symbols['X'] = 'trap.gif';
symbols[':'] = 'tree.gif';
symbols['+'] = 'tree_big.gif';
symbols['_'] = 'tree_fir.gif';
symbols['?'] = 'unknown.gif';

// Browser detection
var opera = 0;
var msie = 0;
var nsmf = 0;
if (navigator.appName.indexOf('Opera') != -1) {
  opera = 1;
}
if (navigator.appName.indexOf('Microsoft') != -1) {
  msie = 1;
}

function splitInfo(txt, idx) {
  var f = 0;
  var e = txt.indexOf('|');
  while (e>=0) {
    idx--;
    if (idx==0) {
      return txt.substring(f, e);
    }
    f = e+1;
    e = txt.indexOf('|', f);
  }
  idx--;
  if (idx==0) {
    return txt.substring(f);
  } else {
    return '';
  }
}

function getInfo() {
  for (var i in map_infos) {
    var iy = splitInfo(map_infos[i], 1);
    var ix = splitInfo(map_infos[i], 2);
    var ii = splitInfo(map_infos[i], 3);
    if (curx==ix && cury==iy) {
      return i;
    }
  }
  return '';
}

function drawSymbol(code) {
  document.write('<TD BACKGROUND="'+symbols_path+symbols[code]+'">');
  var info = getInfo();
  var posid = cury+'|'+curx;
  if (info != '') {
    document.write('<A HREF="#'+posid+'" onMouseOver="showMarker(\''+posid+'\'); showInfo(\''+info+'\', event);" onMouseOut="hideMarker(\''+posid+'\', \'\'); hideInfo();">');
    document.write('<IMG SRC="'+symbols_path+'info.gif" ID="'+posid+'" WIDTH=10 HEIGHT=10 BORDER=0>');
    document.write('</A>');
  } else {
    document.write('<A HREF="#'+posid+'" onMouseOver="showMarker(\''+posid+'\');" onMouseOut="hideMarker(\''+posid+'\', \'clear\');">');
    document.write('<IMG SRC="'+symbols_path+'info_clear.gif" ID="'+posid+'" WIDTH=10 HEIGHT=10 BORDER=0>');
    document.write('</A>');
  }
  document.write('</TD>');
  curx++;
}

function showMap(map) {
  var mapw = 0;
  var maph = 0;
  map_infos = map['infos'];
  for (var m in map['map']) {
    maph++;
    if (map['map'][m].length>mapw) { mapw = map['map'][m].length; }
  }
  // alert('Map is '+mapw+'x'+maph+'.');
  document.writeln('<TABLE BORDER=0 CELLSPACING=0 CELLPADDING=0>');
  document.writeln('<TR>');
  document.writeln('  <TD><IMG SRC="'+images_path+'title_left.gif" WIDTH=10 HEIGHT=32></TD>');
  document.writeln('  <TD COLSPAN='+(mapw+2)+' VALIGN="middle" BACKGROUND="'+images_path+'title_middle.gif" STYLE="font-size: 12pt; font-family: \'Times New Roman\',serif; font-weight: bold; color: #630;">'+map['title']+'</TD>');
  document.writeln('  <TD><IMG SRC="'+images_path+'title_right.gif" WIDTH=10 HEIGHT=32></TD>');
  document.writeln('</TR>');
  document.writeln('<TR>');
  document.writeln('  <TD><IMG SRC="'+images_path+'top_left.gif" WIDTH=10 HEIGHT=10></TD>');
  document.writeln('  <TD COLSPAN='+(mapw+2)+' BACKGROUND="'+images_path+'top_middle.gif"></TD>');
  document.writeln('  <TD><IMG SRC="'+images_path+'top_right.gif" WIDTH=10 HEIGHT=10></TD>');
  document.writeln('</TR>');
  document.writeln('<TR>');
  document.writeln('  <TD ROWSPAN='+(maph+4)+' BACKGROUND="'+images_path+'border_left.gif">');
  document.writeln('  <TD COLSPAN='+(mapw+2)+' BACKGROUND="'+images_path+'border_background.gif"><IMG SRC="'+symbols_path+'info_clear.gif" WIDTH=10 HEIGHT=10></TD>');
  document.writeln('  <TD ROWSPAN='+(maph+4)+' BACKGROUND="'+images_path+'border_right.gif"></TD>');
  document.writeln('</TR>');
  document.writeln('<TR>');
  cury = 0;
  curx = 1;
  for (var i=0;i<mapw+2;i++) {
    drawSymbol('?');
  }
  document.writeln('</TR>');
  var sort = '';
  cury = 1;
  for (var m in map['map']) {
    sort += m+', ';
    document.writeln('<TR>');
    curx = 0;
    drawSymbol('?');
    for (var i=0;i<map['map'][m].length;i++) {
      drawSymbol(map['map'][m].charAt(i));
    }
    drawSymbol('?');
    document.writeln('</TR>');
    cury++;
  }
  // alert('Sort order: '+sort);
  document.write('<TR>');
  curx = 1;
  for (var i=0;i<mapw+2;i++) {
    drawSymbol('?');
  }
  document.writeln('</TR>');
  document.writeln('<TR>');
  document.writeln(' <TD COLSPAN='+(mapw+2)+' BACKGROUND="'+images_path+'border_background.gif"><IMG SRC="'+symbols_path+'info_clear.gif" WIDTH=10 HEIGHT=10></TD>');
  document.writeln('</TR>');
  document.writeln('<TR>');
  document.writeln('  <TD><IMG SRC="'+images_path+'bottom_left.gif" WIDTH=10 HEIGHT=11></TD>');
  document.writeln('  <TD COLSPAN='+(mapw+2)+' BACKGROUND="'+images_path+'bottom_middle.gif"></TD>');
  document.writeln('  <TD><IMG SRC="'+images_path+'bottom_right.gif" WIDTH=10 HEIGHT=11></TD>');
  document.writeln('</TR>');
  document.writeln('</TABLE>');
  document.write('<DIV ID="InfoBox" STYLE="position: absolute; padding: 0px; z-index: 150; visibility: hidden;"></DIV>');
}

function showInfo(txt, event) {
  if (txt != '') {
    var dx = 0;
    var dy = 0;
    var i = document.getElementById('InfoBox');
    var t = '<TABLE STYLE="background-color: white; border: 1 solid #88f; color: black;" CELLSPACING=0>';
    t += '<TR><TD STYLE="font-size: 12pt; font-family: \'Times New Roman\',serif; font-weight: bold; background-color: #88f;">';
    t += splitInfo(map_infos[txt], 3);
    t += '</TD></TR>';
    if (splitInfo(map_infos[txt], 4) != '') {
      t += '<TR><TD STYLE="font-size: 10pt; font-family: \'Times New Roman\',serif;">';
      t += splitInfo(map_infos[txt], 4);
      t += '</TD></TR>';
    }
    t += '</TABLE>';
    i.innerHTML = t;
    if (self.pageYOffset) {
      // all, except Explorer
      dx = window.pageXOffset;
      dy = window.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      // MSIE6 strict
      dx = document.documentElement.scrollLeft;
      dy = document.documentElement.scrollTop;
    } else if (document.body) {
      // other Explorers
      dx = document.body.scrollLeft;
      dy = document.body.scrollTop;
    }
    i.style.left = Math.round(dx+event.clientX+20) + 'px';
    i.style.top  = Math.round(dy+event.clientY) + 'px';
    i.style.visibility = 'visible';
  }
  return;
}

function hideInfo() {
  var i = document.getElementById('InfoBox');
  i.style.visibility = 'hidden';
}

function showMarker(posid) {
  var img = document.getElementById(posid);
  img.src = symbols_path+'info_hover.gif';  
}

function hideMarker(posid, infoimg) {
  var img = document.getElementById(posid);
  var reimg = 'info';
  if (infoimg != '') {
    reimg += '_'+infoimg;
  }
  reimg += '.gif';
  img.src = symbols_path+reimg;  
}

function showInfolist(map) {
  for (var i in map['infos']) {
    var cury = parseInt(splitInfo(map['infos'][i],1));
    var curx = parseInt(splitInfo(map['infos'][i],2));
    var posid = cury+'|'+curx;
    document.write('<A NAME="'+posid+'"><A HREF="#'+posid+'" onMouseOver="showMarker(\''+posid+'\');" onMouseOut="hideMarker(\''+posid+'\', \'\');">');
    document.write(splitInfo(map['infos'][i],3));
    document.write('</A><BR>');
    document.write(splitInfo(map['infos'][i],4));
    document.write('<P>');
  }
}

function showMenu() {
  var mcats = new Array();
  var mcatnames = new Array();
  for (var c in maps) {
    mcats.push(c);
    for (var n in maps[c]) {
      if (!mcatnames[c]) mcatnames[c] = new Array();
      mcatnames[c].push(n);
    }
    mcatnames[c].sort();
  }
  mcats.sort();

  for (var c in mcats) {
    document.writeln('      <OPTGROUP LABEL="'+mcats[c]+'">');
    for (var m in mcatnames[mcats[c]]) {
      document.writeln('        <OPTION VALUE="'+maps[mcats[c]][mcatnames[mcats[c]][m]]+'">'+mcatnames[mcats[c]][m]+'</OPTION>');
    }
    document.writeln('      </OPTGROUP>');
  }
}


// initialization
var xmapname = location.search.substring(1);
if (xmapname.length > 0) {
  // create empty object to prevent errors when checking for successful map loading
  // eval(xmapname+' = new Array();');
  // eval(xmapname+'[\'title\'] = undefined;');
  // document.writeln('<'+'SCRIPT TYPE="text/javascript" SRC="'+xmapname+'.js"><\/SCR'+'IPT>');
  eval('var xmap = '+xmapname+';');
  document.writeln('  <TITLE>Legacy Map: '+xmap['title']+'<\/TITLE>');
} else {
  document.writeln('  <TITLE>Legacy Map Viewer --- (c)2004 by Markus Birth &lt;mbirth@webwriters.de&gt;<\/TITLE>');
}
