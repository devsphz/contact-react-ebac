import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 20px;
    min-height: 100vh;
    box-sizing: border-box;
    
    /* Layout base para desktop */
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Ajuste para tablets */
    @media (max-width: 768px) {
      padding: 15px;
    }

    /* Ajuste para mobile */
    @media (max-width: 480px) {
      padding: 10px;
    }
  }

  h1 {
    text-align: center;
    color: #333;
    margin: 20px 0;
    font-size: 2rem; /* Tamanho relativo */

    /* Ajuste para tablets */
    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin: 15px 0;
    }

    /* Ajuste para mobile */
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin: 10px 0;
    }
  }

  h5 {
    color: #333;
    margin: 15px 0 10px;
    font-size: 1.2rem;

    /* Ajuste para mobile */
    @media (max-width: 480px) {
      font-size: 1rem;
      margin: 12px 0 8px;
    }
  }

  /* Melhorias de acessibilidade e toque */
  button, input {
    font-size: 1rem;
    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 10px 15px !important;
    }
  }
`
