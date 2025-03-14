// Imagen predeterminada para fallbacks
const DEFAULT_IMAGE = "https://www.seekpng.com/png/full/49-497411_marvel-characters-png-marvel-logo.png";

// Mapeo basado en nombres de personajes con URLs reales
export const CHARACTER_NAME_IMAGE_MAPPING: Record<string, string> = {
  "Aaron Stack": "https://s3.amazonaws.com/comicgeeks/characters/avatars/72789.jpg?t=1732711711",
  "Abomination (Ultimate)": "https://upload.wikimedia.org/wikipedia/en/4/4d/Abomination_%28Emil_Blonsky%29.jpg",
  "Adam Destine": "https://s3.amazonaws.com/comicgeeks/characters/avatars/12209.jpg?t=1663947490",
  "Aero (Aero)": "https://upload.wikimedia.org/wikipedia/en/1/1e/Marvel%27s_Aero_%282019%29.webp",
  "Agent X (Nijo)": "https://static.wikia.nocookie.net/marveldatabase/images/3/3f/Agent_X_Vol_1_3_Textless.jpg",
  "Agent Zero": "https://static.wikia.nocookie.net/marveldatabase/images/b/bd/X-Men_Vol_2_5_Textless.jpg",
  "Aginar": "https://s3.amazonaws.com/comicgeeks/characters/avatars/19730.jpg?t=1732688539",
  "Ajak": "https://static.wikia.nocookie.net/marveldatabase/images/a/ae/Ajak_%28Earth-616%29_from_Eternals_Vol_5_4_001.jpg",
  "Ajaxis": "https://static.wikia.nocookie.net/marveldatabase/images/b/b4/Ajaxis_%28Earth-616%29_from_Uncanny_X-Men_Annual_Vol_2_2000_001.jpg",
  "Akemi": "https://comicbookrealm.com/cover-scan/7761d84c675bfbd533a8fc3cc8c21733/xl/brainstorm-comics-akemi-issue-1.jpg",
  "Alain": "https://static.wikia.nocookie.net/marveldatabase/images/7/79/Alain_Racine_%28Earth-616%29_from_Scarlet_Witch_Vol_2_6_001.jpg",
  "Alexa Mendez": "https://wallpapers.com/images/hd/pixel-3xl-marvel-background-oe0d8tgca7rg4lh4.jpg",
  "Albert": "https://static.wikia.nocookie.net/marveldatabase/images/d/de/Albert_%28Earth-616%29_from_Wolverine_Vol_1_37_0001.jpg",
  "Albion": "https://static.wikia.nocookie.net/marveldatabase/images/b/ba/Peter_Hunter_%28Earth-811%29_from_Excalibur_Vol_1_66_0001.jpg",
  "Albert Cleary": "https://s3.amazonaws.com/comicgeeks/characters/avatars/6710.jpg?t=1667656101",
  "Alexander Pierce": "https://upload.wikimedia.org/wikipedia/en/4/4f/Alexander_Pierce.jpg",
  "Alex Power": "https://static.wikia.nocookie.net/marveldatabase/images/7/7a/Alex_Power_%28Earth-616%29_0002.jpg",
  "Alex Wilder": "https://static.wikia.nocookie.net/marveldatabase/images/a/ab/Runaways_Vol_1_1_Textless.jpg",
  "Alice": "https://static.wikia.nocookie.net/marveldatabase/images/f/fc/Alice_%28Augmented%29_%28Earth-616%29_from_Wolverine_Vol_4_6_0001.jpg",
  "Alicia Masters": "https://static.wikia.nocookie.net/marveldatabase/images/3/36/Alicia_Masters_%28Earth-616%29_from_Fantastic_Four_Vol_6_26_001.jpg",
  "Alpha Flight (Ultimate)": "https://static.wikia.nocookie.net/marveldatabase/images/9/9c/Alpha_Flight_%28Earth-616%29_from_Wolverine_Vol_2_171_0001.jpg",
  "Alvin Maker": "https://i.pinimg.com/564x/f7/30/eb/f730eb4f373b6937cbb930a5580f35e9.jpg",
  "Amanda Sefton": "https://www.superherodb.com/pictures2/portraits/10/050/446.jpg",
  "Amazoness": "https://static.wikia.nocookie.net/marveldatabase/images/3/32/Amazons_%28Earth-616%29_from_Incredible_Hercules_Vol_1_121_0001.jpg",
  "American Eagle (Jason Strongbow)": "https://static.wikia.nocookie.net/marveldatabase/images/8/85/Jason_Strongbow_%28Earth-616%29_0001.jpg",
  "Amiko": "https://s3.amazonaws.com/comicgeeks/characters/avatars/1015.jpg?t=1673223588",
  "Amora": "https://static.wikia.nocookie.net/marveldatabase/images/4/4d/Immortal_Thor_Vol_1_17_Go_Variant_Textless.jpg",
  "Amphibian (Earth-712)": "https://s3.amazonaws.com/comicgeeks/characters/avatars/15539.jpg?t=1719899089",
  "Amun": "https://s3.amazonaws.com/comicgeeks/characters/avatars/5819.jpg?t=1676057263",
  "Ancient One": "https://static.wikia.nocookie.net/vsbattles/images/e/ef/Ancient_One_1.jpg",
  "Ancient One (Ultimate)": "https://static.wikia.nocookie.net/vsbattles/images/e/ef/Ancient_One_1.jpg",
  "Angel (Thomas Halloway)": "https://static.wikia.nocookie.net/marveldatabase/images/4/47/Thomas_Halloway_%28Earth-616%29_from_Marvel_Mystery_Comics_Vol_1_4_001.jpg",
  "Angel (Angel Salvadore)": "https://static.wikia.nocookie.net/marveldatabase/images/3/30/Angel_Salvadore_%28Earth-616%29_from_New_X-Men_Vol_1_118_005.jpg",
  "Angel (Ultimate)": "https://static.wikia.nocookie.net/marveldatabase/images/e/ea/Warren_Worthington_III_%28Earth-1610%29_from_Official_Handbook_of_the_Marvel_Universe_Vol_4_20_001.jpg",
  "Angel (Warren Worthington III)": "https://upload.wikimedia.org/wikipedia/en/1/1b/X-men_angel_archangel.jpg",
  "Angela (Aldrif Odinsdottir)": "https://static.wikia.nocookie.net/marveldatabase/images/b/b2/Angela_Asgard%27s_Assassin_Vol_1_1_Textless.jpg",
  "Amadeus Cho": "https://static.wikia.nocookie.net/marveldatabase/images/7/7f/Incredible_Hulk_Vol_1_709_Character_Variant_Textless.jpg",
  "Adam Warlock": "https://static.wikia.nocookie.net/marveldatabase/images/a/a3/Adam_Warlock_%28Earth-616%29_from_Avengers_Celestials_Quest_Vol_1_2_001.jpg",
  "Beast": "https://static.wikia.nocookie.net/marveldatabase/images/d/db/Destroyers_Vol_1_2_Textless.jpg/revision/latest?cb=20111126111509",
  "Captain America": "https://static.wikia.nocookie.net/marveldatabase/images/4/4d/Captain_America_Vol_11_4_Stonehouse_Variant_Textless.jpg/revision/latest?cb=20240613062532",
  "Captain Marvel": "https://static.wikia.nocookie.net/marveldatabase/images/4/4f/Carol_Danvers_%28Earth-616%29_from_Captain_Marvel_Vol_11_2_Stormbreakers_Variant_cover.jpg/revision/latest?cb=20231030190801",
  "Hulk": "https://cdn.marvel.com/content/1x/hulkard_0.jpg",
  "Iron Man": "https://static.wikia.nocookie.net/marveldatabase/images/0/06/Anthony_Stark_%28Earth-616%29_from_Invincible_Iron_Man_Vol_2_25_001.jpg/revision/latest/scale-to-width-down/1280?cb=20140128052219",
  "Spider-Man": "https://cdn.marvel.com/content/1x/005smp_com_mas_dsk_03_3.jpg",
  "Thor": "https://static.wikia.nocookie.net/marveldatabase/images/b/b2/Thor_Vol_3_1_Textless.jpg/revision/latest?cb=20090525221746",
  "Wolverine": "https://static.wikia.nocookie.net/marveldatabase/images/2/25/Wolverine_Vol_8_3_Villalobos_Virgin_Variant.jpg/revision/latest?cb=20241125214540",
  "Scarlet Witch": "https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/5a3cf031-fa8d-430b-9a4c-d4e0f37a58d5/fc76baf9-8084-44f8-ba53-7394b05af59c/1280x720/match/image.jpg",
  "Storm": "https://static.wikia.nocookie.net/marvel-dc/images/0/01/Dyf_099VsAAwna9.jpg/revision/latest?cb=20200114163624"
};


/**
 * Verifica si una imagen de la API de Marvel no está disponible
 * @param path Ruta de la imagen a verificar
 */
export const isImageNotAvailable = (path: string | undefined): boolean => {
  if (!path) return true;
  
  // Patrones conocidos de imágenes no disponibles en la API de Marvel
  const unavailablePatterns = [
    'image_not_available',
    'standard_xlarge.jpg',
    '4c002e0305708.gif'
  ];
  
  return unavailablePatterns.some(pattern => path.includes(pattern));
};

/**
 * Asegura que una URL utilice HTTPS
 * @param url URL a procesar
 */
export const ensureHttps = (url: string): string => {
  return url.replace(/^http:/, 'https:');
};

/**
 * Obtiene la imagen apropiada para un personaje cuando la original no está disponible
 * @param name Nombre del personaje
 * @param id ID del personaje (no utilizado actualmente, mantenido por compatibilidad)
 */
export const getFallbackImage = (name: string = '', id?: number): string => {
  if (name && CHARACTER_NAME_IMAGE_MAPPING[name]) {
    return CHARACTER_NAME_IMAGE_MAPPING[name];
  }
  
  return DEFAULT_IMAGE;
};

/**
 * Obtiene la descripción traducida para un personaje si está disponible
 * @param name Nombre del personaje (mantenido por compatibilidad)
 * @param originalDescription Descripción original proporcionada por la API
 * @param id ID del personaje 
 */
export const getCharacterDescription = (name: string = '', originalDescription: string = '', id?: number): string => {
    // Mapeo de IDs a descripciones traducidas
    const characterDescriptionsById: Record<string, string> = {
      "1011334": "Un héroe con fuerza y velocidad mejoradas, formado por la fusión de dos hermanos.", // 3-D MAN
      "1017100": "Rick Jones transformado en una criatura azul con superfuerza y durabilidad.", // A-Bomb (HAS)
      "1009144": "Organización terrorista científica obsesionada con el avance tecnológico para la dominación global.", // A.I.M.
      "1010699": "Un androide con inteligencia avanzada y fuerza sobrehumana, antes conocido como Machine Man.", // Aaron Stack
      "1009146": "Un enemigo de Hulk con fuerza y resistencia superiores, incapaz de volver a su forma humana.", // Abomination (Emil Blonsky)
      "1016823": "Una versión mejorada de Blonsky con habilidades similares pero mayor control sobre su transformación.", // Abomination (Ultimate)
      "1009148": "Criminal con la capacidad de absorber las propiedades de cualquier material que toca.", // Absorbing Man
      "1009149": "Entidad oscura con habilidades de manipulación de sombras y energía negativa.", // Abyss
      "1010903": "Miembro de los Jinetes de Apocalipsis con la capacidad de generar un vacío viviente.", // Abyss (Age of Apocalypse)
      "1011266": "Inmortal con fuerza sobrehumana y habilidades regenerativas, líder de la familia mística ClanDestine", // Adam Destine
      "1010846": "Ser cósmico artificial con gran poder, guardián de la Gema del Alma.", // Adam Warlock
      "1010754": "Joven con una armadura mágica que le otorga invulnerabilidad y habilidades místicas.", // Aegis (Trey Rollins)
      "1017851": "Heroína china con la capacidad de manipular el viento y volar.", // Aero (Aero)
      "1012717": "Bruja antigua con vasto conocimiento místico y mentora de Wanda Maximoff.", // Agatha Harkness
      "1011297": "Directora de S.W.O.R.D., especializada en defensa contra amenazas extraterrestres.", // Agent Brand
      "1011031": "Mercenario con habilidades regenerativas y gran destreza en combate.", // Agent X (Nijo)
      "1009150": "Exsoldado de Weapon X con regeneración, habilidades de combate y supresión de feromonas.", // Agent Zero
      "1011198": "Grupo de héroes liderado por Jimmy Woo, especializado en misiones secretas.", // Agents of Atlas
      "1011175": "Miembro de la raza alienígena Rigeliana con habilidades sobrehumanas.", // Aginar
      "1011136": "Heraldo de Galactus con fuerza cósmica y vuelo intergaláctico.", // Air-Walker (Gabriel Lan)
      "1011176": "Eterno con poderes divinos, arqueólogo y guerrero de su raza.", // Ajak
      "1010870": "Guerrero de Troya mejorado cibernéticamente.", // Ajaxis
      "1011194": "Personaje menor vinculado a Wolverine.", // Akemi
      "1011170": "También conocido como Le Peregrine, es un superhéroe francés con habilidades acrobáticas, fuerza mejorada y gran destreza en combate aéreo. Ha representado a Francia en torneos de superhéroes y ha trabajado como protector de su país.", // Alain
      "1009240": "Abogado de la organización Damage Control.", // Albert Cleary
      "1011120": "Mutante británico con habilidades de combate y manipulación de energía.", // Albion
      "1010836": "Miembro de Power Pack con control sobre la gravedad y la densidad.", // Alex Power
      "1010755": "Agente de S.H.I.E.L.D. con experiencia en operaciones encubiertas.", // Alexa Mendez
      "1009497": "Agente de S.H.I.E.L.D. que en los cómics actúa como aliado de Nick Fury.", // Alexander Pierce
      "1014990": "Es un pingüino antropomórfico y compañero de Howard the Duck. Aunque no es un personaje central en los cómics, ha aparecido en historias humorísticas dentro del universo de Howard the Duck, una serie que satiriza los tropos de superhéroes y la cultura pop.", // Alice
      "1009435": "Escultora ciega y amor de Ben Grimm (La Cosa), famosa por sus estatuas realistas.", // Alicia Masters
      "1010370": "Equipo canadiense de superhéroes patrocinado por el gobierno.", // Alpha Flight
      "1011324": "Versión más agresiva del equipo en el universo Ultimate.", // Alpha Flight (Ultimate)
      "1011164": "Es un jóven con habilidades místicas para hacer y alterar la realidad, en un mundo alternativo inspirado en la América del siglo XIX.", // Alvin Maker
      "1011227": "Genio con inteligencia sobrehumana y eventual sucesor de Hulk.", // Amadeus Cho
      "1009567": "Hechicera y hermana adoptiva de Nightcrawler, alias Daytripper.", // Amanda Sefton
      "1011382": "Guerrera de la dimensión de Mojoworld.", // Amazoness
      "1011361": "Héroe indígena americano con fuerza y sentidos mejorados.", // American Eagle (Jason Strongbow)
      "1009151": "Hija adoptiva de Wolverine, criada en Japón.", // Amiko
      "1010672": "También conocida como Encantadora, una hechicera asgardiana enemiga de Thor.", // Amora
      "1010673": "Miembro de los Escuadrones Supremo con habilidades acuáticas.", // Amphibian (Earth-712)
      "1010905": "Personaje menor vinculado a historias de dioses egipcios en Marvel.", // Amun
      "1009152": "Hechicero Supremo anterior a Doctor Strange, maestro de las artes místicas.", // Ancient One
      "1016824": "Versión alternativa del Hechicero Supremo en el universo Ultimate.", // Ancient One (Ultimate)
      "1011684": "Mutante con alas de insecto y la capacidad de escupir ácido.", // Angel (Angel Salvadore)
      "1011405": "Héroe enmascarado de la Edad de Oro con habilidades detectivescas.", // Angel (Thomas Halloway)
      "1011325": "Versión alternativa de Warren Worthington III, más trágica y con alas más resistentes.", // Angel (Ultimate)
      "1009153": "Mutante con alas naturales, miembro de los X-Men y, más tarde, Arcángel.", // Angel (Warren Worthington III)
      "1017574": "Hija de Odin, guerrera de Heven y eventual aliada de los Guardianes de la Galaxia." // Angela (Aldrif Odinsdottir)
    };

    // Buscar descripción por ID (método principal)
    if (id) {
      const idStr = id.toString();
      if (characterDescriptionsById[idStr]) {
        return characterDescriptionsById[idStr];
      }
    }

    // Si no hay descripción traducida, devolvemos la original
    return originalDescription;
}; 