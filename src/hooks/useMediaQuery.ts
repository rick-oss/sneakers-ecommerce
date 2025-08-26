import { useState, useEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query); // cria um MediaQueryList com a string passada
    const onChange = () => setMatches(media.matches); // atualiza o state quando a media mudar

    setMatches(media.matches); // Seta o valor inicial

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
