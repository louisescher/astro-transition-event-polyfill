const inBrowser = import.meta.env.SSR === false;

const transitionEnabledOnThisPage = () =>
	inBrowser && !!document.querySelector('[name="astro-view-transitions-enabled"]');

window.addEventListener('load', () => {
  const transitionEnabled = transitionEnabledOnThisPage();

  if (!transitionEnabled) {
    document.dispatchEvent(new Event('astro:page-load'));
  }
});