"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BIO() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  // BIO content split into sections to pair with images
  const bioSections = [
    {
      id: 1,
      text: `Cantautor, arreglista, compositor y empresario panameño, oriundo de la provincia de Bocas del Toro. Sus canciones incluyen géneros como la salsa, el bolero, la balada, merengue pop y bachata.

En el año 1998 se radica en Ciudad de Panamá, dando a conocer su gran talento y poniéndolo al servicio de diferentes agrupaciones musicales, desenvolviéndose como pianista y cantante.

En el 2007 lanza su primer trabajo musical como solista, titulado "De cara al mundo" permitiendo disfrutar al público de temas como "Amor imposible","Y le pregunto al viento" y "La promesa".`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 2,
      text: `En 2008 incursiona en el mundo de los negocios y crea Zahorí Group, empresa dedicada a la gestión y contratación de eventos privados, corporativos y familiares, satisfaciendo con su excelente trabajo musical al público más exigente y posicionándola entre las mejores compañías del país en su industria. En la actualidad, Zahorí Group es referencia en el mercado, sobresaliendo por su competitividad y constante innovación.

En junio de ese mismo año, presentó la obra musical "Historia de un amor" en el Teatro En Círculo, compartiendo escenario con destacados artistas y músicos e incorporando temas de su autoría y una selección de boleros tradicionales.

Comprometido con las causas sociales, durante ese año también participó en diferentes eventos benéficos como la Teletón 20-30, FANLIC, entre otros.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 3,
      text: `En el año 2009, interpreta a dúo con el reguetonero colombiano Big Yamo la versión balada de "Qué será", tema de este último.

Este mismo año, participa en el XII Festival Internacional del Bolero y El Son Caribe en Cartagena de Indias, Colombia, compartiendo escenario con artistas internacionales como, Leo Montesinos de Cuba, Amaya Forch de Chile, Indira Briseño de Venezuela, Valentín Trujillo, entre otros.

En el 2010 fue nominado para representar a Panamá en los "Premios Estrella Music Award", gala celebrada el 29 de octubre en Islas Canarias, España.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 4,
      text: `En julio de 2014, después de cuatro años de ausencia dedicado a su faceta como empresario, es invitado al concurso "Buscando a la Alejandra Guzmán", con motivo del concierto de Franco De Vita en Ciudad de Panamá, acompañando a las participantes con su interpretación del artista ítalo-venezolano.

En septiembre del mismo año, graba el videoclip musical de "Mi melancolía", tema de su autoría e incursionando así, en el género merengue pop.

En este mismo año, es seleccionado para representar a Panamá en el "Festival Internacional de la Canción Punta del Este" en Uruguay.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 5,
      text: `A mediados del 2015, anuncia la preparación de una nueva producción discográfica y en el 2016 se da a conocer que con este material, incursionaba en el género bachata.

Como parte de sus labores filantrópicas, en marzo de 2017 asiste a "Legacy Gala for Whispers from Children's Hearts Foundation" en Casa del Mar Hotel en Santa Mónica, California, USA.

En este mismo año, presenta el videoclip musical de "Dime que hay", filmado en Los Ángeles, California, USA. Este tema de su autoría es aclamado por la crítica y se convierte en un éxito comercial, siendo incluido en la programación de diferentes estaciones de radio en Los Ángeles y Las Vegas. En Panamá, además del éxito en la radio, el videoclip sorprendió al público debido a su mensaje de inclusión.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 6,
      text: `En junio de este año, es invitado a "Colorful Summer Gala", organizada por Heart of Hollywood Motion Pictures, en Pasadena, California, USA.

En julio de 2017, crea la banda sonora de la obra teatral "Baño de Damas" en la gala "Noche de Cabaret bajo las Estrellas" de la Organización Tierra Blanca Arts Center, celebrada en Plaza de la Raza en Los Ángeles, California, USA.

En 2018 presenta la versión bachata de "Eres lo que imaginé", tema de la autoría del reconocido pianista panameño Walter Smith, cuyo videoclip fue filmado en Los Ángeles, California, USA.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 7,
      text: `En marzo de 2018, continuando con su mensaje de inclusión y con motivo de la "Conmemoración del Día Mundial del Síndorme de Down", realiza gestiones para colaborar con la Fundación Down Panamá.

El 14 de mayo de 2018, lanza oficialmente el videoclip musical "Solos tú y yo", filmado en Ciudad de Panamá y cuyos protagonistas son personas con Síndrome de Down, de la Fundación Down Panamá, siendo aclamado por los medios y el público en general. Además, inicia una gira de medios acompañado por Ximena Varela y José Palma, protagonistas del videoclip.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 8,
      text: `En mayo de 2018, participa en el evento anual "Gala de la Belleza" de "Miss Teen Panamá", celebrada en el Salón Panamá del Hotel Riu Plaza, con la presencia de más de 600 espectadores. Durante su presentación, estuvo acompañado por un cuerpo de baile, integrado por jóvenes de la Fundación Down Panamá. La organización Miss Teen Panamá le invita a participar en la "Gran Gala Final de Elección y Coronación", a llevarse a cabo en agosto de ese año.

En septiembre de ese año, es artista invitado a la "Gran Noche Final Miss Cuba & Miss Teen Cuba Queen of the Continentes 2019", celebrada en el Teatro Goodlet de Hialeah en Miami, Florida, USA.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 9,
      text: `En febrero de 2019 se radica en Miami, Florida, USA.

En abril de este año, es artista invitado al "Concierto Vive la Vida Azul" de Bryan's Art Foundation, a beneficio de niños con autismo, celebrado en Miami, Florida. El evento contó con la presentación de la conductora y productora Janet Seminario y el actor y cantante Bobby Larios. Además, la participación de la reconocida pareja de bailarines "Ganas con Canas".

En mayo de 2019, realiza una temporada a bordo de uno de los cruceros de Bahamas Paradise Cruise Line, teniendo a su cargo el Show Latino, en compañía de la reconocida percusionista y cantante cubana Yarelis Gandul.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 10,
      text: `Para la temporada navideña del 2019, nos presenta el videoclip musical "En esta navidad", con letra y música del maestro Walter Smith y los arreglos musicales a su cargo.

En el mes de agosto de 2020 promocionando su sencillo "Sin saber a qué sabías", cuyo videoclip fue filmado en Miami.

Para el mes de marzo de 2021 presenta su sencillo "Inaccesible" en versión bolero, el videoclip fue filmado en Miami, ciudad de Panamá y Las Bahamas.`,
      image: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 11,
      text: `A inicios del 2022 presenta su sencillo "Culpable" en versión bolero, video clip grabado en la ciudad de Miami Florida.

En octubre de 2023 nos presenta su ultimo sencillo promocional "Sin ti no hay fiesta" productor musical de Alfredo Matheus y Felipe Molinares. Alfredo Matheus es un reconocido compositor, productor y ganador de múltiples premios Grammys, en esta canción comparte coautoría con Felipe Molinares y Alfredo Matheus.

Actualmente se encuentra trabajando en 3 videos musicales, de sus nuevos temas que estará presentando a finales de marzo inicios de abril del 2024.

Simultáneamente, se dedica a la animación de eventos, shows, fiesta privadas y corporativas en la ciudad de Miami Florida.`,
      image: "/placeholder.svg?height=800&width=600",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Title Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-widest mb-4"
        >
          B i o g r a f í a
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl font-light"
        >
          Richard González
        </motion.h2>
      </div>

      {/* BIO Sections */}
      <div className="container mx-auto">
        <div className="w-full flex flex-row md:h-[500px]">
          <div className="left h-full w-[50%] p-4 ">
            <Image src="/background.png" width={100} height={100} alt="background" className="w-full h-full object-cover" />
          </div>
          <div className="right flex text-white flex-col h-full w-[50%] ">
            <div className="h-[50%] w-full flex justify-start items-center">
              <p className="w-[50%]">
                A inicios del 2022 presenta su sencillo "Culpable" en versión
                bolero, video clip grabado en la ciudad de Miami Florida. En
                octubre de 2023 nos presenta su ultimo sencillo promocional "Sin
              </p>
            </div>
            <div className="h-[50%] w-full flex justify-end items-center">
              <p className="w-[50%]">
                A inicios del 2022 presenta su sencillo "Culpable" en versión
                bolero, video clip grabado en la ciudad de Miami Florida. En
                octubre de 2023 nos presenta su ultimo sencillo promocional "Sin
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row md:h-[500px]">

          <div className="left flex text-white flex-col h-full w-[50%] ">
            <div className="h-[50%] w-full flex justify-start items-center">
              <p className="w-[50%]">
                A inicios del 2022 presenta su sencillo "Culpable" en versión
                bolero, video clip grabado en la ciudad de Miami Florida. En
                octubre de 2023 nos presenta su ultimo sencillo promocional "Sin
              </p>
            </div>
            <div className="h-[50%] w-full flex justify-end items-center">
              <p className="w-[50%]">
                A inicios del 2022 presenta su sencillo "Culpable" en versión
                bolero, video clip grabado en la ciudad de Miami Florida. En
                octubre de 2023 nos presenta su ultimo sencillo promocional "Sin
              </p>
            </div>
          </div>

          <div className="right h-full w-[50%] p-4 ">
            <Image src="/background.png" width={100} height={100} alt="background" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
