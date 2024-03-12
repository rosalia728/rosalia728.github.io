export type Photo = {
    // Photo ID (unique). It will also become the URL slug.
    id: number | string
    // Photo title
    title: string
    // Photo URL (can be absolute or relative to the public folder)
    url: string
    // Photo description
    description: string
  }

export function getPhotos(ordered: boolean = true): Photo[] {
    if (ordered) {
        // Devolver el array de fotos por defecto
        return photos.slice();
    } else {
        // Devolver el array de fotos desordenado
        //return photos.slice().sort(() => Math.random() - 0.5); 
        return shuffle(123456);
        
    }
}

function random(seed: number) {
    var x = Math.sin(seed++) * 10000; 
    return x - Math.floor(x);
  }

  function shuffle(seed: number) {    
    var array = photos.slice()            // <-- ADDED ARGUMENT
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed                                     // <-- ADDED LINE
    }
  
    return array;
  }
    
  export const photos: Photo[] = [
    {
      id: 1,
      title: 'Imagen',
      description:
        "Descripción de la imagen.",
      url: '/img/1.JPG',
    },
    {
        id: 2,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/2.jpg',
      },
      {
        id: 3,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/3.JPG',
      },
      {
        id: 4,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/4.JPG',
      },
      {
        id: 5,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/5.JPG',
      },
      {
        id: 6,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/6.JPG',
      },
      {
        id: 7,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/7.JPG',
      },
      {
        id: 8,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/8.JPG',
      },
      {
        id: 9,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/9.JPG',
      },
      {
        id: 10,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/10.JPG',
      },
      {
        id: 11,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/11.JPG',
      },
      {
        id: 12,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/12.JPG',
      },
      {
        id: 13,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/13.JPG',
      },
      {
        id: 14,
        title: 'Imagen',
        description:
          "Descripción de la imagen.",
        url: '/img/14.jpg',
      },
    
  ]