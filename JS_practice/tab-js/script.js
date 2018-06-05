var tab,
		tabContent;
		
window.onload = function () {
	tabContent = document.getElementsByClassName('tabContent');
	tab = document.getElementsByClassName('tab');
	hideTabContent(1);
	showTabContent(0);
	}		
	
	function hideTabContent(a) {
		for ( var i = 0; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
			tab[i].classList.remove('bord');
		}
	}

	document.getElementById('tabs').onclick = function (event) {
		var target = event.target;
		if (target.className == 'tab') {
			for (var i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					showTabContent(i);
					break;
				};
				
			}
		}
	}

	function showTabContent(b) {
		if ( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tab[b].classList.add('bord');
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');

		}
	}