import { translations, type Lang } from './translations';

const STORAGE_KEY = 'english-lab-lang';

export function getLang(): Lang {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'es') return stored;
  }
  return 'en';
}

export function setLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateToggleButtons(lang);
}

export function t(path: string, lang?: Lang): string {
  const l = lang || getLang();
  const keys = path.split('.');
  let val: any = translations[l];
  for (const key of keys) {
    val = val?.[key];
  }
  return typeof val === 'string' ? val : path;
}

export function applyTranslations(lang?: Lang) {
  const l = lang || getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      const translation = t(key, l);
      if (translation !== key) {
        el.textContent = translation;
      }
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      const translation = t(key, l);
      if (translation !== key) {
        (el as HTMLInputElement).placeholder = translation;
      }
    }
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const key = el.getAttribute('data-i18n-value');
    if (key) {
      const translation = t(key, l);
      if (translation !== key) {
        (el as HTMLOptionElement).value = translation;
      }
    }
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (key) {
      const translation = t(key, l);
      if (translation !== key) {
        el.setAttribute('aria-label', translation);
      }
    }
  });
}

function updateToggleButtons(lang: Lang) {
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    const currentLabel = btn.querySelector('.lang-current');
    if (currentLabel) {
      currentLabel.textContent = lang === 'en' ? 'EN' : 'ES';
    }
  });
}

export function initI18n() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateToggleButtons(lang);
}
