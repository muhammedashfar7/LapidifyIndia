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
		'lapflag-mauritius-sq': '&#xb101;',
		'lapflag-austria-sq': '&#xb105;',
		'lapflag-oman-sq': '&#xb108;',
		'lapflag-ethiopia-sq': '&#xb128;',
		'lapflag-tanzania-sq': '&#xb12e;',
		'lapflag-nicaragua-sq': '&#xb132;',
		'lapflag-estonia-sq': '&#xb15a;',
		'lapflag-uganda-sq': '&#xb15d;',
		'lapflag-slovenia-sq': '&#xb16c;',
		'lapflag-zimbabwe-sq': '&#xb177;',
		'lapflag-sao-tome-and-prince-sq': '&#xb185;',
		'lapflag-italy-sq': '&#xb18a;',
		'lapflag-wales-sq': '&#xb18d;',
		'lapflag-el-salvador-sq': '&#xb194;',
		'lapflag-nepal-sq': '&#xb1d9;',
		'lapflag-christmas-island-sq': '&#xb1de;',
		'lapflag-lebanon-sq': '&#xb1e8;',
		'lapflag-ceuta-sq': '&#xb1ec;',
		'lapflag-iraq-sq': '&#xb210;',
		'lapflag-cook-islands-sq': '&#xb21a;',
		'lapflag-syria-sq': '&#xb23b;',
		'lapflag-cocos-island-sq': '&#xb240;',
		'lapflag-honduras-sq': '&#xb24a;',
		'lapflag-anguilla-sq': '&#xb252;',
		'lapflag-qatar-sq': '&#xb26a;',
		'lapflag-american-samoa-sq': '&#xb26c;',
		'lapflag-puerto-rico-sq': '&#xb27b;',
		'lapflag-comoros-sq': '&#xb282;',
		'lapflag-north-korea-sq': '&#xb28c;',
		'lapflag-corsica-sq': '&#xb292;',
		'lapflag-zambia-sq': '&#xb294;',
		'lapflag-saint-kitts-and-nevis-sq': '&#xb29a;',
		'lapflag-china-sq': '&#xb2a1;',
		'lapflag-luxembourg-sq': '&#xb2a7;',
		'lapflag-central-african-republic-sq': '&#xb2aa;',
		'lapflag-jamaica-sq': '&#xb2b0;',
		'lapflag-cape-verde-sq': '&#xb2b4;',
		'lapflag-monaco-sq': '&#xb2c2;',
		'lapflag-bhutan-sq': '&#xb2c4;',
		'lapflag-paraguay-sq': '&#xb2df;',
		'lapflag-aruba-sq': '&#xb2e6;',
		'lapflag-montserrat-sq': '&#xb2eb;',
		'lapflag-latvia-sq': '&#xb30f;',
		'lapflag-andorra-sq': '&#xb311;',
		'lapflag-micronesia-sq': '&#xb340;',
		'lapflag-dominican-republic-sq': '&#xb345;',
		'lapflag-abkhazia-sq': '&#xb37c;',
		'lapflag-tunisia-sq': '&#xb38c;',
		'lapflag-mauritania-sq': '&#xb390;',
		'lapflag-cayman-islands-sq': '&#xb393;',
		'lapflag-kosovo-sq': '&#xb3e7;',
		'lapflag-ghana-sq': '&#xb3ef;',
		'lapflag-canary-islands-sq': '&#xb3f3;',
		'lapflag-scotland-sq': '&#xb40a;',
		'lapflag-guinea-bissau-sq': '&#xb40c;',
		'lapflag-burundi-sq': '&#xb410;',
		'lapflag-myanmar-sq': '&#xb41a;',
		'lapflag-gabon-sq': '&#xb41e;',
		'lapflag-benin-sq': '&#xb421;',
		'lapflag-saba-island-sq': '&#xb424;',
		'lapflag-namibia-sq': '&#xb428;',
		'lapflag-japan-sq': '&#xb431;',
		'lapflag-lithuania-sq': '&#xb433;',
		'lapflag-eritrea-sq': '&#xb436;',
		'lapflag-chad-sq': '&#xb43a;',
		'lapflag-kenya-sq': '&#xb43d;',
		'lapflag-djibouti-sq': '&#xb44c;',
		'lapflag-british-indian-ocean-territory-sq': '&#xb450;',
		'lapflag-tuvalu-1-sq': '&#xb46b;',
		'lapflag-serbia-sq': '&#xb485;',
		'lapflag-bonaire-sq': '&#xb4a8;',
		'lapflag-togo-sq': '&#xb4ad;',
		'lapflag-kazakhstan-sq': '&#xb4b4;',
		'lapflag-antigua-and-barbuda-sq': '&#xb4d8;',
		'lapflag-suriname-sq': '&#xb4de;',
		'lapflag-jordan-sq': '&#xb4e3;',
		'lapflag-belize-sq': '&#xb4e8;',
		'lapflag-st-barts-sq': '&#xb570;',
		'lapflag-iceland-sq': '&#xb58c;',
		'lapflag-bermuda-sq': '&#xb58f;',
		'lapflag-united-nations-sq': '&#xb5c4;',
		'lapflag-somalia-sq': '&#xb5da;',
		'lapflag-barbados-sq': '&#xb5dc;',
		'lapflag-solomon-islands-sq': '&#xb5e0;',
		'lapflag-nigeria-sq': '&#xb5e8;',
		'lapflag-aland-islands-sq': '&#xb5eb;',
		'lapflag-uruguay-sq': '&#xb5ee;',
		'lapflag-sint-maarten-sq': '&#xb618;',
		'lapflag-burkina-faso-sq': '&#xb630;',
		'lapflag-slovakia-sq': '&#xb633;',
		'lapflag-sierra-leone-sq': '&#xb63a;',
		'lapflag-basque-country-sq': '&#xb63d;',
		'lapflag-south-korea-sq': '&#xb640;',
		'lapflag-pitcairn-islands-sq': '&#xb655;',
		'lapflag-mozambique-sq': '&#xb699;',
		'lapflag-san-marino-sq': '&#xb6a8;',
		'lapflag-guatemala-sq': '&#xb6e2;',
		'lapflag-albania-sq': '&#xb727;',
		'lapflag-pakistan-sq': '&#xb729;',
		'lapflag-northern-cyprus-sq': '&#xb72d;',
		'lapflag-balearic-islands-sq': '&#xb732;',
		'lapflag-marshall-island-sq': '&#xb73d;',
		'lapflag-ecuador-sq': '&#xb741;',
		'lapflag-cameroon-sq': '&#xb76c;',
		'lapflag-panama-sq': '&#xb770;',
		'lapflag-kwait-sq': '&#xb775;',
		'lapflag-armenia-sq': '&#xb779;',
		'lapflag-romania-sq': '&#xb77c;',
		'lapflag-guinea-sq': '&#xb77f;',
		'lapflag-afghanistan-sq': '&#xb782;',
		'lapflag-laos-sq': '&#xb7a2;',
		'lapflag-greenland-sq': '&#xb7a6;',
		'lapflag-british-virgin-islands-sq': '&#xb7aa;',
		'lapflag-hungary-sq': '&#xb7de;',
		'lapflag-curacao-sq': '&#xb7e1;',
		'lapflag-angola-sq': '&#xb7e5;',
		'lapflag-malasya-sq': '&#xb7ec;',
		'lapflag-brunei-sq': '&#xb7fd;',
		'lapflag-bahamas-sq': '&#xb806;',
		'lapflag-new-zealand-sq': '&#xb80a;',
		'lapflag-british-columbia-sq': '&#xb824;',
		'lapflag-vatican-city-sq': '&#xb834;',
		'lapflag-finland-sq': '&#xb860;',
		'lapflag-botswana-sq': '&#xb862;',
		'lapflag-sri-lanka-sq': '&#xb866;',
		'lapflag-spain-sq': '&#xb87d;',
		'lapflag-ossetia-sq': '&#xb8a4;',
		'lapflag-sicily-sq': '&#xb8a7;',
		'lapflag-chile-sq': '&#xb8de;',
		'lapflag-bosnia-and-herzegovina-sq': '&#xb8e2;',
		'lapflag-saudi-arabia-sq': '&#xb8ec;',
		'lapflag-liechtenstein-sq': '&#xb906;',
		'lapflag-belarus-sq': '&#xb90f;',
		'lapflag-iran-sq': '&#xb913;',
		'lapflag-fiji-sq': '&#xb964;',
		'lapflag-bahrain-sq': '&#xb995;',
		'lapflag-venezuela-sq': '&#xb997;',
		'lapflag-east-timor-sq': '&#xb9a4;',
		'lapflag-azerbaijan-sq': '&#xb9a8;',
		'lapflag-tibet-sq': '&#xb9ad;',
		'lapflag-norway-sq': '&#xba34;',
		'lapflag-algeria-sq': '&#xba37;',
		'lapflag-ukraine-sq': '&#xba3b;',
		'lapflag-gambia-sq': '&#xba3d;',
		'lapflag-bangladesh-sq': '&#xba42;',
		'lapflag-madeira-sq': '&#xba44;',
		'lapflag-czech-republic-sq': '&#xba49;',
		'lapflag-bolivia-sq': '&#xba4c;',
		'lapflag-united-arab-emirates-sq': '&#xba87;',
		'lapflag-kyrgyzstan-sq': '&#xba8b;',
		'lapflag-cuba-sq': '&#xba9d;',
		'lapflag-swaziland-sq': '&#xbaa4;',
		'lapflag-israel-sq': '&#xbad4;',
		'lapflag-costa-rica-sq': '&#xbad7;',
		'lapflag-republic-of-the-congo-sq': '&#xbb14;',
		'lapflag-egypt-sq': '&#xbb17;',
		'lapflag-cambodia-sq': '&#xbb1b;',
		'lapflag-northern-marianas-islands-sq': '&#xbb1e;',
		'lapflag-ivory-coast-sq': '&#xbb36;',
		'lapflag-germany-sq': '&#xbb39;',
		'lapflag-papua-new-guinea-sq': '&#xbb3c;',
		'lapflag-croatia-sq': '&#xbb44;',
		'lapflag-belgium-sq': '&#xbb6f;',
		'lapflag-morocco-sq': '&#xbb72;',
		'lapflag-macao-sq': '&#xbb74;',
		'lapflag-bulgaria-sq': '&#xbb80;',
		'lapflag-liberia-sq': '&#xbb83;',
		'lapflag-greece-sq': '&#xbb90;',
		'lapflag-galapagos-islands-sq': '&#xbb98;',
		'lapflag-st-lucia-sq': '&#xbb9b;',
		'lapflag-mali-sq': '&#xbb9f;',
		'lapflag-denmark-sq': '&#xbba2;',
		'lapflag-rapa-nui-sq': '&#xbba4;',
		'lapflag-lesotho-sq': '&#xbba6;',
		'lapflag-colombia-sq': '&#xbbaa;',
		'lapflag-palau-sq': '&#xbbad;',
		'lapflag-ireland-sq': '&#xbbaf;',
		'lapflag-french-polynesia-sq': '&#xbbb2;',
		'lapflag-trinidad-and-tobago-sq': '&#xbbc7;',
		'lapflag-niue-sq': '&#xbbcb;',
		'lapflag-hong-kong-sq': '&#xbbe3;',
		'lapflag-sweden-sq': '&#xbbe9;',
		'lapflag-haiti-sq': '&#xbbeb;',
		'lapflag-dominica-sq': '&#xbbed;',
		'lapflag-vanuatu-sq': '&#xbc08;',
		'lapflag-peru-sq': '&#xbc0e;',
		'lapflag-equatorial-guinea-sq': '&#xbc11;',
		'lapflag-uzbekistn-sq': '&#xbc1f;',
		'lapflag-tonga-sq': '&#xbc31;',
		'lapflag-philippines-sq': '&#xbc34;',
		'lapflag-norfolk-island-sq': '&#xbc43;',
		'lapflag-malta-sq': '&#xbc47;',
		'lapflag-france-sq': '&#xbc51;',
		'lapflag-tajikistan-sq': '&#xbc54;',
		'lapflag-melilla-sq': '&#xbc63;',
		'lapflag-argentina-sq': '&#xbcaa;',
		'lapflag-sudan-sq': '&#xbcaf;',
		'lapflag-south-africa-sq': '&#xbcb3;',
		'lapflag-martinique-sq': '&#xbcba;',
		'lapflag-taiwan-sq': '&#xbcc0;',
		'lapflag-sahrawi-arab-democratic-republic-sq': '&#xbcc7;',
		'lapflag-guernsey-sq': '&#xbccd;',
		'lapflag-switzerland-sq': '&#xbcd1;',
		'lapflag-rwanda-sq': '&#xbcd3;',
		'lapflag-guam-sq': '&#xbcd9;',
		'lapflag-palestine-sq': '&#xbce4;',
		'lapflag-indonesia-sq': '&#xbce8;',
		'lapflag-grenada-sq': '&#xbcea;',
		'lapflag-poland-sq': '&#xbcf8;',
		'lapflag-moldova-sq': '&#xbcfa;',
		'lapflag-gibraltar-sq': '&#xbd27;',
		'lapflag-malawi-sq': '&#xbd31;',
		'lapflag-falkland-islands-sq': '&#xbd4c;',
		'lapflag-england-sq': '&#xbd7c;',
		'lapflag-virgin-islands-sq': '&#xbd7e;',
		'lapflag-turkey-sq': '&#xbd93;',
		'lapflag-isle-of-man-sq': '&#xbd96;',
		'lapflag-vietnam-sq': '&#xbdc9;',
		'lapflag-tuvalu-sq': '&#xbdcb;',
		'lapflag-niger-sq': '&#xbde6;',
		'lapflag-turks-and-caicos-sq': '&#xbdea;',
		'lapflag-portugal-sq': '&#xbe05;',
		'lapflag-maldives-sq': '&#xbe16;',
		'lapflag-united-states-sq': '&#xbe19;',
		'lapflag-senegal-sq': '&#xbe4b;',
		'lapflag-nauru-sq': '&#xbe4f;',
		'lapflag-turkmenistan-sq': '&#xbe52;',
		'lapflag-singapore-sq': '&#xbe7d;',
		'lapflag-libya-sq': '&#xbe85;',
		'lapflag-yemen-sq': '&#xbe8a;',
		'lapflag-transnistria-sq': '&#xbe8d;',
		'lapflag-australia-sq': '&#xbe8f;',
		'lapflag-tokelau-sq': '&#xbea7;',
		'lapflag-republic-of-macedonia-sq': '&#xbeae;',
		'lapflag-netherlands-sq': '&#xbebc;',
		'lapflag-thailand-sq': '&#xbebf;',
		'lapflag-montenegro-sq': '&#xbec3;',
		'lapflag-azores-islands-sq': '&#xbece;',
		'lapflag-st-vincent-and-the-grenadines-sq': '&#xbee8;',
		'lapflag-madagascar-sq': '&#xbeee;',
		'lapflag-canada-sq': '&#xbef1;',
		'lapflag-south-sudan-sq': '&#xbef6;',
		'lapflag-jersey-sq': '&#xbefe;',
		'lapflag-india-sq': '&#xbf2f;',
		'lapflag-somaliland-sq': '&#xbf46;',
		'lapflag-russia-sq': '&#xbf62;',
		'lapflag-democratic-republic-of-congo-sq': '&#xbf65;',
		'lapflag-sint-eustatius-sq': '&#xbf6a;',
		'lapflag-samoa-sq': '&#xbf6f;',
		'lapflag-mexico-sq': '&#xbf76;',
		'lapflag-seychelles-sq': '&#xbf8c;',
		'lapflag-nato-sq': '&#xbf91;',
		'lapflag-brazil-sq': '&#xbf97;',
		'lapflag-georgia-sq': '&#xbfa6;',
		'lapflag-sardinia-sq': '&#xbfac;',
		'lapflag-mongolia-sq': '&#xbfb2;',
		'lapflag-european-union-sq': '&#xbfc0;',
		'lapflag-united-kingdom-sq': '&#xbfcd;',
		'lapflag-kiribati-sq': '&#xbfde;',
		'lapflag-hawaii-sq': '&#xbfe9;',
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
