/************************
* LEGACY MAP of         *
* Dungeon of N'Gora     *
* done by               *
* Markus Birth          *
* mbirth@webwriters.de  *
************************/

var dungeon_of_ngora = new Array();

dungeon_of_ngora['level'] = 'Level 1';
dungeon_of_ngora['title'] = 'Dungeon of N\'Gora';
dungeon_of_ngora['map'] = [
  '#####?###s#?????????',
  '# # ### # #?????????',
  '#   S     #?????????',
  '# ## ## ###?????????',
  '#  h  hD#???????????',
  '# ##### ##??????????',
  '#e####   ######?????',
  '##X E  P  E   #?????',
  '#  ###   #w#  #?????',
  '#X #### ## ## ##????',
  '##    l#vH     #????',
  '?#########S  # #####',
  '####w w ##H#      Z#',
  'f M      #H# #### ##',
  '#### u u   #a#T##D#?',
  '???#########?#H## #?',
  '?????????????#    #?',
  '?????????????######?'];

dungeon_of_ngora['infos'] = [
  ' 1|10|Ladder|Ladder to the Caves of N\'Gora',
  ' 2| 9|Sign|"N\'Gora\'s domain"',
  ' 3| 5|Switch|Fires a fireball-cannon, move quickly or drop a heavy object on it.',
  ' 5| 4|Shelf|some items',
  ' 5| 7|Shelf|some items',
  ' 7| 2|Shelf|N\'Gora\'s door key',
  ' 8| 5|Door|Attack the door before opening',
  ' 8|11|Locked Door|Use N\'Gora\'s door key to open it.',
  ' 9| 3|Item on ground',
  ' 9|11|Switch|Switches the hole in front of the other switch',
  '11| 3|Item on ground',
  '11| 5|Item on ground',
  '11| 7|Ashela|"...Ahh... Please, please... Help me to end this life of torture... Kill me... I don\'t want to suffer anymore..."',
  '11| 9|Switch|Switches the first hole in the passage',
  '11|10|Hole|Use the northern switch to close this hole',
  '12|14|Sign|"Holes and switches - be clever or be dead."',
  '12|11|Switch|Drop a heavy object here to close the second hole in the passage',
  '13| 5|Switch|The lever has to face down',
  '13| 7|Switch|The lever has to face down',
  '13|11|Hole|Use the western switch to close this hole',
  '13|19|Mana Sphere',
  '14| 1|Shelf|N\'Gora\'s entrance key',
  '14| 3|Magic Wall|Disappears if the switches are switched like described',
  '14|11|Hole|Drop a heavy object on the ground switch to close this hole',
  '15| 6|Switch|The lever has to face up',
  '15| 8|Switch|The lever has to face up',
  '15|13|Well',
  '15|15|Teleporter|Teleports you to the Domain of N\'Gora',
  '15|18|Locked Door|Use N\'Gora\'s entrance key to open it.',
  '16|15|Magic hole|Disappears and reappears - time your move!',
  '17|14|Sign|"How dare you enter my domain?! I said: leave or die!"',
  '18|18|Sign|"Turn back, poor human! Do you think that your miserable power will be enough to defeat the Master?!"',
  '19|22|Map and engine made by Markus Birth|&lt;<A HREF="mailto:mbirth@webwriters.de">mbirth@webwriters.de</A>&gt;'
  ];

AddMenu('dungeon_of_ngora');
