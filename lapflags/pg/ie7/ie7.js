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
		el.innerHTML = '<span style="font-family: \'lapflag\'">' + entity + '</span>' + html;
	}
	var icons = {
		'lapflag-mauritius-pg': '&#xe401;',
		'lapflag-austria-pg': '&#xe405;',
		'lapflag-oman-pg': '&#xe408;',
		'lapflag-ethiopia-pg': '&#xe427;',
		'lapflag-tanzania-pg': '&#xe42d;',
		'lapflag-nicaragua-pg': '&#xe431;',
		'lapflag-estonia-pg': '&#xe459;',
		'lapflag-uganda-pg': '&#xe45c;',
		'lapflag-slovenia-pg': '&#xe46a;',
		'lapflag-zimbabwe-pg': '&#xe475;',
		'lapflag-sao-tome-and-prince-pg': '&#xe483;',
		'lapflag-italy-pg': '&#xe489;',
		'lapflag-wales-pg': '&#xe48c;',
		'lapflag-el-salvador-pg': '&#xe493;',
		'lapflag-nepal-pg': '&#xe526;',
		'lapflag-christmas-island-pg': '&#xe52b;',
		'lapflag-lebanon-pg': '&#xe534;',
		'lapflag-ceuta-pg': '&#xe538;',
		'lapflag-iraq-pg': '&#xe55c;',
		'lapflag-cook-islands-pg': '&#xe566;',
		'lapflag-syria-pg': '&#xe57a;',
		'lapflag-cocos-island-pg': '&#xe57f;',
		'lapflag-honduras-pg': '&#xe589;',
		'lapflag-anguilla-pg': '&#xe591;',
		'lapflag-qatar-pg': '&#xe59c;',
		'lapflag-american-samoa-pg': '&#xe59e;',
		'lapflag-puerto-rico-pg': '&#xe5af;',
		'lapflag-comoros-pg': '&#xe5b5;',
		'lapflag-north-korea-pg': '&#xe5bf;',
		'lapflag-corsica-pg': '&#xe5c5;',
		'lapflag-zambia-pg': '&#xe5c7;',
		'lapflag-saint-kitts-and-nevis-pg': '&#xe5cd;',
		'lapflag-china-pg': '&#xe5d4;',
		'lapflag-luxembourg-pg': '&#xe5da;',
		'lapflag-central-african-republic-pg': '&#xe5dd;',
		'lapflag-jamaica-pg': '&#xe5e5;',
		'lapflag-cape-verde-pg': '&#xe5ea;',
		'lapflag-monaco-pg': '&#xe5f8;',
		'lapflag-bhutan-pg': '&#xe5fa;',
		'lapflag-paraguay-pg': '&#xe615;',
		'lapflag-aruba-pg': '&#xe61c;',
		'lapflag-montserrat-pg': '&#xe623;',
		'lapflag-latvia-pg': '&#xe63a;',
		'lapflag-andorra-pg': '&#xe63d;',
		'lapflag-micronesia-pg': '&#xe66c;',
		'lapflag-dominican-republic-pg': '&#xe671;',
		'lapflag-abkhazia-pg': '&#xe6a8;',
		'lapflag-tunisia-pg': '&#xe6b6;',
		'lapflag-mauritania-pg': '&#xe6ba;',
		'lapflag-cayman-islands-pg': '&#xe6bd;',
		'lapflag-kosovo-pg': '&#xe704;',
		'lapflag-ghana-pg': '&#xe70c;',
		'lapflag-canary-islands-pg': '&#xe710;',
		'lapflag-scotland-pg': '&#xe727;',
		'lapflag-guinea-bissau-pg': '&#xe72c;',
		'lapflag-burundi-pg': '&#xe730;',
		'lapflag-myanmar-pg': '&#xe73b;',
		'lapflag-gabon-pg': '&#xe73f;',
		'lapflag-benin-pg': '&#xe742;',
		'lapflag-saba-island-pg': '&#xe745;',
		'lapflag-namibia-pg': '&#xe74b;',
		'lapflag-japan-pg': '&#xe754;',
		'lapflag-lithuania-pg': '&#xe756;',
		'lapflag-eritrea-pg': '&#xe759;',
		'lapflag-chad-pg': '&#xe75d;',
		'lapflag-kenya-pg': '&#xe760;',
		'lapflag-djibouti-pg': '&#xe76e;',
		'lapflag-british-indian-ocean-territory-pg': '&#xe772;',
		'lapflag-tuvalu-1-pg': '&#xe784;',
		'lapflag-serbia-pg': '&#xe791;',
		'lapflag-bonaire-pg': '&#xe7b4;',
		'lapflag-togo-pg': '&#xe7b9;',
		'lapflag-kazakhstan-pg': '&#xe7bf;',
		'lapflag-antigua-and-barbuda-pg': '&#xe7e3;',
		'lapflag-suriname-pg': '&#xe7e9;',
		'lapflag-jordan-pg': '&#xe7ee;',
		'lapflag-belize-pg': '&#xe7f3;',
		'lapflag-st-barts-pg': '&#xe87b;',
		'lapflag-iceland-pg': '&#xe897;',
		'lapflag-bermuda-pg': '&#xe89d;',
		'lapflag-united-nations-pg': '&#xe8c7;',
		'lapflag-somalia-pg': '&#xe8dd;',
		'lapflag-barbados-pg': '&#xe8df;',
		'lapflag-solomon-islands-pg': '&#xe8e3;',
		'lapflag-nigeria-pg': '&#xe8eb;',
		'lapflag-aland-islands-pg': '&#xe8ee;',
		'lapflag-uruguay-pg': '&#xe8f4;',
		'lapflag-sint-maarten-pg': '&#xe91a;',
		'lapflag-burkina-faso-pg': '&#xe932;',
		'lapflag-slovakia-pg': '&#xe935;',
		'lapflag-sierra-leone-pg': '&#xe93c;',
		'lapflag-basque-country-pg': '&#xe93f;',
		'lapflag-south-korea-pg': '&#xe94d;',
		'lapflag-pitcairn-islands-pg': '&#xe962;',
		'lapflag-mozambique-pg': '&#xe999;',
		'lapflag-san-marino-pg': '&#xe9a7;',
		'lapflag-guatemala-pg': '&#xe9e1;',
		'lapflag-albania-pg': '&#xea26;',
		'lapflag-pakistan-pg': '&#xea28;',
		'lapflag-northern-cyprus-pg': '&#xea2c;',
		'lapflag-balearic-islands-pg': '&#xea31;',
		'lapflag-marshall-island-pg': '&#xea38;',
		'lapflag-ecuador-pg': '&#xea3d;',
		'lapflag-cameroon-pg': '&#xea68;',
		'lapflag-panama-pg': '&#xea6c;',
		'lapflag-kwait-pg': '&#xea71;',
		'lapflag-armenia-pg': '&#xea75;',
		'lapflag-romania-pg': '&#xea78;',
		'lapflag-guinea-pg': '&#xea7b;',
		'lapflag-afghanistan-pg': '&#xea7e;',
		'lapflag-laos-pg': '&#xea9e;',
		'lapflag-greenland-pg': '&#xeaa2;',
		'lapflag-british-virgin-islands-pg': '&#xeaa6;',
		'lapflag-hungary-pg': '&#xeacd;',
		'lapflag-curacao-pg': '&#xead0;',
		'lapflag-angola-pg': '&#xead5;',
		'lapflag-malasya-pg': '&#xeadc;',
		'lapflag-brunei-pg': '&#xeae6;',
		'lapflag-bahamas-pg': '&#xeaef;',
		'lapflag-new-zealand-pg': '&#xeaf3;',
		'lapflag-british-columbia-pg': '&#xeb00;',
		'lapflag-vatican-city-pg': '&#xeb2b;',
		'lapflag-finland-pg': '&#xeb57;',
		'lapflag-botswana-pg': '&#xeb59;',
		'lapflag-sri-lanka-pg': '&#xeb5e;',
		'lapflag-spain-pg': '&#xeb76;',
		'lapflag-ossetia-pg': '&#xeb9e;',
		'lapflag-sicily-pg': '&#xeba1;',
		'lapflag-chile-pg': '&#xebd8;',
		'lapflag-bosnia-and-herzegovina-pg': '&#xebdc;',
		'lapflag-saudi-arabia-pg': '&#xebe8;',
		'lapflag-liechtenstein-pg': '&#xec02;',
		'lapflag-belarus-pg': '&#xec0b;',
		'lapflag-iran-pg': '&#xec3c;',
		'lapflag-fiji-pg': '&#xeca2;',
		'lapflag-bahrain-pg': '&#xecc6;',
		'lapflag-venezuela-pg': '&#xecc8;',
		'lapflag-east-timor-pg': '&#xecd5;',
		'lapflag-azerbaijan-pg': '&#xecd9;',
		'lapflag-tibet-pg': '&#xecde;',
		'lapflag-norway-pg': '&#xed66;',
		'lapflag-algeria-pg': '&#xed6c;',
		'lapflag-ukraine-pg': '&#xed70;',
		'lapflag-gambia-pg': '&#xed72;',
		'lapflag-bangladesh-pg': '&#xed76;',
		'lapflag-madeira-pg': '&#xed78;',
		'lapflag-czech-republic-pg': '&#xed7d;',
		'lapflag-bolivia-pg': '&#xed80;',
		'lapflag-united-arab-emirates-pg': '&#xedbb;',
		'lapflag-kyrgyzstan-pg': '&#xedbf;',
		'lapflag-cuba-pg': '&#xedd1;',
		'lapflag-swaziland-pg': '&#xedd7;',
		'lapflag-israel-pg': '&#xee06;',
		'lapflag-costa-rica-pg': '&#xee0a;',
		'lapflag-republic-of-the-congo-pg': '&#xee46;',
		'lapflag-egypt-pg': '&#xee49;',
		'lapflag-cambodia-pg': '&#xee4d;',
		'lapflag-northern-marianas-islands-pg': '&#xee51;',
		'lapflag-ivory-coast-pg': '&#xee69;',
		'lapflag-germany-pg': '&#xee6c;',
		'lapflag-papua-new-guinea-pg': '&#xee6f;',
		'lapflag-croatia-pg': '&#xee77;',
		'lapflag-belgium-pg': '&#xeea2;',
		'lapflag-morocco-pg': '&#xeea5;',
		'lapflag-macao-pg': '&#xeea7;',
		'lapflag-bulgaria-pg': '&#xeeb3;',
		'lapflag-liberia-pg': '&#xeeb6;',
		'lapflag-greece-pg': '&#xeebf;',
		'lapflag-galapagos-islands-pg': '&#xeec5;',
		'lapflag-st-lucia-pg': '&#xeec8;',
		'lapflag-mali-pg': '&#xeecc;',
		'lapflag-denmark-pg': '&#xeecf;',
		'lapflag-rapa-nui-pg': '&#xeed4;',
		'lapflag-lesotho-pg': '&#xeed6;',
		'lapflag-colombia-pg': '&#xeeda;',
		'lapflag-palau-pg': '&#xeedd;',
		'lapflag-ireland-pg': '&#xeedf;',
		'lapflag-french-polynesia-pg': '&#xeee2;',
		'lapflag-trinidad-and-tobago-pg': '&#xeef7;',
		'lapflag-niue-pg': '&#xeefb;',
		'lapflag-hong-kong-pg': '&#xef06;',
		'lapflag-sweden-pg': '&#xef0c;',
		'lapflag-haiti-pg': '&#xef11;',
		'lapflag-dominica-pg': '&#xef13;',
		'lapflag-vanuatu-pg': '&#xef33;',
		'lapflag-peru-pg': '&#xef3b;',
		'lapflag-equatorial-guinea-pg': '&#xef3e;',
		'lapflag-uzbekistn-pg': '&#xef4c;',
		'lapflag-tonga-pg': '&#xef5e;',
		'lapflag-philippines-pg': '&#xef61;',
		'lapflag-norfolk-island-pg': '&#xef70;',
		'lapflag-malta-pg': '&#xef74;',
		'lapflag-france-pg': '&#xef7e;',
		'lapflag-tajikistan-pg': '&#xef81;',
		'lapflag-melilla-pg': '&#xef90;',
		'lapflag-argentina-pg': '&#xefd7;',
		'lapflag-sudan-pg': '&#xefdc;',
		'lapflag-south-africa-pg': '&#xefe0;',
		'lapflag-martinique-pg': '&#xefe6;',
		'lapflag-taiwan-pg': '&#xefef;',
		'lapflag-sahrawi-arab-democratic-republic-pg': '&#xeff6;',
		'lapflag-guernsey-pg': '&#xeffc;',
		'lapflag-switzerland-pg': '&#xefff;',
		'lapflag-rwanda-pg': '&#xf001;',
		'lapflag-guam-pg': '&#xf006;',
		'lapflag-palestine-pg': '&#xf011;',
		'lapflag-indonesia-pg': '&#xf015;',
		'lapflag-grenada-pg': '&#xf017;',
		'lapflag-poland-pg': '&#xf026;',
		'lapflag-moldova-pg': '&#xf028;',
		'lapflag-gibraltar-pg': '&#xf055;',
		'lapflag-malawi-pg': '&#xf05f;',
		'lapflag-falkland-islands-pg': '&#xf07a;',
		'lapflag-england-pg': '&#xf09d;',
		'lapflag-virgin-islands-pg': '&#xf09f;',
		'lapflag-turkey-pg': '&#xf0b4;',
		'lapflag-isle-of-man-pg': '&#xf0b7;',
		'lapflag-vietnam-pg': '&#xf0ea;',
		'lapflag-tuvalu-pg': '&#xf0ec;',
		'lapflag-niger-pg': '&#xf0fa;',
		'lapflag-turks-and-caicos-pg': '&#xf0fe;',
		'lapflag-portugal-pg': '&#xf10c;',
		'lapflag-maldives-pg': '&#xf11d;',
		'lapflag-united-states-pg': '&#xf120;',
		'lapflag-senegal-pg': '&#xf13c;',
		'lapflag-nauru-pg': '&#xf140;',
		'lapflag-turkmenistan-pg': '&#xf144;',
		'lapflag-singapore-pg': '&#xf184;',
		'lapflag-libya-pg': '&#xf18c;',
		'lapflag-yemen-pg': '&#xf191;',
		'lapflag-transnistria-pg': '&#xf194;',
		'lapflag-australia-pg': '&#xf197;',
		'lapflag-tokelau-pg': '&#xf1a2;',
		'lapflag-republic-of-macedonia-pg': '&#xf1a9;',
		'lapflag-netherlands-pg': '&#xf1ac;',
		'lapflag-thailand-pg': '&#xf1af;',
		'lapflag-montenegro-pg': '&#xf1b3;',
		'lapflag-azores-islands-pg': '&#xf1bf;',
		'lapflag-st-vincent-and-the-grenadines-pg': '&#xf1d9;',
		'lapflag-madagascar-pg': '&#xf1df;',
		'lapflag-canada-pg': '&#xf1e2;',
		'lapflag-south-sudan-pg': '&#xf1e6;',
		'lapflag-jersey-pg': '&#xf1ed;',
		'lapflag-india-pg': '&#xf21e;',
		'lapflag-somaliland-pg': '&#xf222;',
		'lapflag-russia-pg': '&#xf23e;',
		'lapflag-democratic-republic-of-congo-pg': '&#xf241;',
		'lapflag-sint-eustatius-pg': '&#xf246;',
		'lapflag-samoa-pg': '&#xf24c;',
		'lapflag-mexico-pg': '&#xf253;',
		'lapflag-seychelles-pg': '&#xf269;',
		'lapflag-nato-pg': '&#xf26e;',
		'lapflag-brazil-pg': '&#xf274;',
		'lapflag-georgia-pg': '&#xf283;',
		'lapflag-sardinia-pg': '&#xf289;',
		'lapflag-mongolia-pg': '&#xf28f;',
		'lapflag-european-union-pg': '&#xf29c;',
		'lapflag-united-kingdom-pg': '&#xf2a9;',
		'lapflag-kiribati-pg': '&#xf2b7;',
		'lapflag-hawaii-pg': '&#xf2d1;',
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
		c = c.match(/lapflag-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
