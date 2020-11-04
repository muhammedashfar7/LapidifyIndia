/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lapicons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'lapicon-scientist': '&#xecd2;',
		'lapicon-werewolf': '&#xecf0;',
		'lapicon-pumpkin': '&#xed05;',
		'lapicon-nurse': '&#xed1c;',
		'lapicon-magician': '&#xed39;',
		'lapicon-unicorn1': '&#xed56;',
		'lapicon-wrestler': '&#xed6e;',
		'lapicon-gnome1': '&#xed8b;',
		'lapicon-cowboy': '&#xeda5;',
		'lapicon-clown': '&#xedc3;',
		'lapicon-scarecrow1': '&#xede1;',
		'lapicon-fairy1': '&#xee00;',
		'lapicon-astronaut': '&#xee14;',
		'lapicon-glasses': '&#xee26;',
		'lapicon-prisioner': '&#xee42;',
		'lapicon-viking': '&#xee5b;',
		'lapicon-nun': '&#xee73;',
		'lapicon-mummy': '&#xee89;',
		'lapicon-knight1': '&#xee98;',
		'lapicon-harlequin': '&#xeeaf;',
		'lapicon-princess1': '&#xeedb;',
		'lapicon-indian-woman': '&#xeef5;',
		'lapicon-pirate1': '&#xef0e;',
		'lapicon-zombie': '&#xef28;',
		'lapicon-skeleton': '&#xef42;',
		'lapicon-cat': '&#xef58;',
		'lapicon-wizard1': '&#xef70;',
		'lapicon-ghost': '&#xef8e;',
		'lapicon-firefighter': '&#xefa3;',
		'lapicon-troglodyte': '&#xefbb;',
		'lapicon-rat': '&#xefd7;',
		'lapicon-catrina': '&#xeff1;',
		'lapicon-monster': '&#xf011;',
		'lapicon-ghost1': '&#xf026;',
		'lapicon-witch1': '&#xf038;',
		'lapicon-serial-killer': '&#xf055;',
		'lapicon-alien': '&#xf07d;',
		'lapicon-doll': '&#xf08f;',
		'lapicon-devil': '&#xf0a9;',
		'lapicon-frankestein': '&#xf0be;',
		'lapicon-bride': '&#xf0d7;',
		'lapicon-ninja': '&#xf0ed;',
		'lapicon-vampire1': '&#xf103;',
		'lapicon-thief': '&#xf11b;',
		'lapicon-angel': '&#xf12e;',
		'lapicon-mime': '&#xf142;',
		'lapicon-little-red-riding-hood1': '&#xf160;',
		'lapicon-robot': '&#xf176;',
		'lapicon-superheroine': '&#xf18b;',
		'lapicon-police': '&#xf1a6;',
		'lapicon-knight': '&#xe900;',
		'lapicon-wizard': '&#xe91f;',
		'lapicon-dwarf': '&#xe932;',
		'lapicon-elf': '&#xe94b;',
		'lapicon-witch': '&#xe962;',
		'lapicon-ogre': '&#xe978;',
		'lapicon-giant': '&#xe98b;',
		'lapicon-gnome': '&#xe99d;',
		'lapicon-little-red-riding-hood': '&#xe9b2;',
		'lapicon-wolf': '&#xe9c2;',
		'lapicon-queen': '&#xe9d7;',
		'lapicon-king': '&#xe9ec;',
		'lapicon-princess': '&#xea01;',
		'lapicon-prince': '&#xea19;',
		'lapicon-frog-prince': '&#xea2f;',
		'lapicon-fairy': '&#xea40;',
		'lapicon-robin-hood': '&#xea57;',
		'lapicon-pirate': '&#xea70;',
		'lapicon-goblin': '&#xea8b;',
		'lapicon-elf1': '&#xea9d;',
		'lapicon-pig': '&#xeab3;',
		'lapicon-tin-man': '&#xeac8;',
		'lapicon-scarecrow': '&#xeadf;',
		'lapicon-cowardly-lion': '&#xeaf5;',
		'lapicon-pinocchio': '&#xeb06;',
		'lapicon-puss-in-boots': '&#xeb1a;',
		'lapicon-mad-hatter': '&#xeb32;',
		'lapicon-cyclops': '&#xeb4d;',
		'lapicon-white-rabbit': '&#xeb60;',
		'lapicon-mermaid': '&#xeb76;',
		'lapicon-genie': '&#xeb8b;',
		'lapicon-vampire': '&#xeba6;',
		'lapicon-unicorn': '&#xebbc;',
		'lapicon-dragon': '&#xebca;',
		'lapicon-phoenix': '&#xebd7;',
		'lapicon-poison': '&#xebe1;',
		'lapicon-poison1': '&#xebef;',
		'lapicon-cauldron': '&#xebfd;',
		'lapicon-poisonous': '&#xec0d;',
		'lapicon-magic-mirror': '&#xec19;',
		'lapicon-excalibur': '&#xec2b;',
		'lapicon-glass-shoes': '&#xec3b;',
		'lapicon-magic-lamp': '&#xec47;',
		'lapicon-crystal-ball': '&#xec5d;',
		'lapicon-ring': '&#xec6e;',
		'lapicon-broom': '&#xec7a;',
		'lapicon-magic-wand': '&#xec88;',
		'lapicon-tower': '&#xec95;',
		'lapicon-castle': '&#xeca4;',
		'lapicon-fairytale': '&#xecc0;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/lapicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
