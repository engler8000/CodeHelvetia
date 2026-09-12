(function() {
	const button = document.querySelector('.menu-button');
	const mobileNav = document.querySelector('.mobile-nav');
	if (!button || !mobileNav) return;
	const iconMenu = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
	const iconClose = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';

	function setOpen(open) {
		mobileNav.hidden = !open;
		button.setAttribute('aria-expanded', String(open));
		button.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
		button.innerHTML = open ? iconClose : iconMenu;
	}
	setOpen(false);
	button.addEventListener('click', () => setOpen(mobileNav.hidden));
	mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
})();
