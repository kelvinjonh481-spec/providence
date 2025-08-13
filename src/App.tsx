
import { useEffect } from 'react';
import CustomLanguageSelect from './components/CustomLanguageSelect'
import VotePage from './components/VotePage'

function App() {
  useEffect(() => {
    // Define the init function on window
    (window as any).googleTranslateElementInit = () => {
      console.log("✅ Google Translate Initialized");
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ko,fr,it,es,zh-TW',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Load the Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <VotePage />
      <div id="google_translate_element" style={{ display: 'none' }} />
      <CustomLanguageSelect />
    </>
  )
}

export default App
