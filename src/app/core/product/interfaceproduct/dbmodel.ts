
export interface prodotti {
    id: string;
    immagine: string;
    rating: number;
    titolo: string;
    prezzo: string;
  }
  
  export interface ItemCarrello {
    id: string;
    immagine: string;
    titolo: string;
    prezzo: string;
    quantita: number;
}

export interface recensioni {
product: any;
user: any;
review: any;
  id: string;
  data_creazione: string;
  rating: Number;
  testo_recensione: string;
  id_product: string;
  id_utente: string;
}