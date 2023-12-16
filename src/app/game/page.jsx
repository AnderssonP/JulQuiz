'use client'
import React from 'react';
import Card from './cardComponent';
import { useState, useEffect } from 'react';

const Game = () => {
  
  const [TeamOnePoints, setTeamOnePoints] = useState(0);
  const [TeamTwoPoints, setTeamTwoPoints] = useState(0);
  const [TeamThreePoints, setTeamThreePoints] = useState(0);
  const [currentTeam, setCurrentTeam] = useState(1);
  const [isGameFinished, setIsGameFinished] = useState(false);


  
  const countPoint = (selectedAnswer, correctAnswer, points) => {
    if (selectedAnswer === correctAnswer) {
      if (currentTeam === 1) {
        setTeamOnePoints((prevPoints) => prevPoints + points);
      } else if(currentTeam === 2) {
        setTeamTwoPoints((prevPoints) => prevPoints + points);
      } else{
        setTeamThreePoints((prevPoints) => prevPoints + points)
      }
    } 
    turn();
  };

  const turn = () => {
    setCurrentTeam(currentTeam => {
      if (currentTeam === 1) {
        return 2;
      } else if (currentTeam === 2) {
        return 3;
      } else {
        return 1;
      }
    });
  };
  

  return (
    < >
    <div className="teamName">
      <h2 className={currentTeam === 1 ? 'active' : ''}>lag 1: {TeamOnePoints}</h2>
      <h2 className={currentTeam === 2 ? 'active' : ''}>lag 2: {TeamTwoPoints}</h2>
      <h2 className={currentTeam === 3 ? 'active' : ''}>lag 3: {TeamThreePoints}</h2>
    </div>
    <div className="container">
      <div>
        <h2 className='category'>Jul</h2>
        <Card 
        number={1} 
        question={"Vad betyder ordet ”advent”?"} 
        img={"https://cdn.shopify.com/s/files/1/2159/6325/files/advent_2048x2048.jpg?v=1530009694"} 
        A={"A: Herrens ankomst"}B={"B: I väntan"} C={"C: Förberedelse"} answer={"A"} 
        countPoint={countPoint}
        >
        </Card>
        <Card 
        number={2} 
        question={"Ungefär hur mycket julskinka äts det per person till jul i Sverige varje år?"} 
        img={"https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_207291/cf_259/julskinka_i_ugn.jpg"} 
        A={"A: 300 gram"}B={"B: 1 kilo"} C={"C: 580 gram"} answer={"B"} countPoint={countPoint} >
        </Card>
        <Card 
        number={3} 
        question={'Vilket land startade traditionen att sätta upp och dekorera en julgran?'} 
        img={"https://pro.elobina.se/wp-content/uploads/sites/2/2017/11/b68674d13fd0ca47e826a4610b2388d4_Julgran-r%C3%B6da-klappar-128x150-anv%C3%A4nd-panel-1..jpg"} 
        A={"A: England"}B={"B: Danmark"} C={"C: Tyskland"} answer={"C"} countPoint={countPoint}>
        </Card>
        <Card 
        number={4} 
        question={"När började man ha julfirande?"} 
        img={"https://wallpapers.com/images/featured/vintage-jul-bilder-vmgr5nnad14et42h.jpg"}
        A={"A: 200 e.kr"}B={"B: 300 e.kr"} C={"C: 400 e.kr"} answer={"B"} countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vilket år skapades den första officiella julkortet i Storbritannien?"}
        img={"https://shop.djurensratt.se/cdn/shop/products/JulkortRudolf.jpg?v=1605793319"}
        A={"A: 1843"}B={"B: 1867"} C={"C: 1892"} answer={"A"} countPoint={countPoint}>
        </Card>
      </div>
      <div>
        <h2 className='category'>Musik</h2>
        <Card 
        number={1} 
        question={"Namn på Artist/Band"}
        img={"https://thesouthtexan.com/wp-content/uploads/2023/12/149232937_country-music.jpg"}
        A={"A: Luke combs"} B={"B: Zac Brown Band "} C={"C: Brad Paisley"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"I vilket band är nirvanas f.d trummis Dave Grohl numera frontfigur?"}
        img={"https://cdn.theatlantic.com/thumbor/L12mTQX_KF6bdbWBeT1-MysITc0=/451x0:3067x3270/648x810/media/img/2023/06/29/ZU8A3718_DG_Roisenstein/original.jpg"}
        A={"A: Foo fighters"} B={"B: Pearl Jam"} C={"C: Alice in Chains"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vilket år kom denna låt ut?"} 
        img={"https://i.scdn.co/image/ab67616d0000b273a66391502f8d8ef68b3401c2"}
        A={"A: 1981"} B={"B: 1982"} C={"C: 1983"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={'Vem gör en feature på denna låt? '} 
        img={"https://media.istockphoto.com/id/1175435360/sv/vektor/ikon-f%C3%B6r-musik-anteckning-vektor-illustration.jpg?s=612x612&w=0&k=20&c=h-YOpYBWd4HflSvyubeFUDhXNCgz8VUatw4eOpRZaS0="}
        A={"A: Rag'n'Bone man"} B={"B: Chris kläfford"} C={"C: Post malone"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Namn på Artist"} 
        img={"https://media.istockphoto.com/id/1175435360/sv/vektor/ikon-f%C3%B6r-musik-anteckning-vektor-illustration.jpg?s=612x612&w=0&k=20&c=h-YOpYBWd4HflSvyubeFUDhXNCgz8VUatw4eOpRZaS0="}
        A={"A: The Royal Concept"} B={"B: Capital Cities"} C={"C: Magic man"} answer={"A"}
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>Sport</h2>
        <Card 
        number={1} 
        question={" Vilket land är känd för att ha uppfunnit sporten rugby?"}
        img={"https://static01.nyt.com/images/2023/09/06/multimedia/06sp-rugby-pools-inyt-01-wcgp/06sp-rugby-pools-inyt-01-wcgp-videoSixteenByNine3000.jpg"}
        A={"A: England"} B={"B: Frankrike"} C={"C: Australien"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"Hur långt är ett maraton?"} 
        img={"https://www.svtstatic.se/image-news/1200/1.91:1/0.51/0.13/37409302f1ae68a06d6cf9de26c040d92a5fcf98528038209baf457940ef3255"}
        A={"A: 40.450 km"} B={"B: 42.195 km"} C={"C: 45.800 km"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vilket år hölls de första moderna olympiska sommarspelen?"}
        img={"https://intervju.se/wp-content/uploads/2022/03/olympiska-spelen.png"}
        A={"A: 1886"} B={"B: 1896"} C={"C: 1906"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Vilken tennislegend är känd för sitt oöverträffade antal Grand Slam-titlar i singel för herrar?"}
        img={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/1200px-Tennis_Racket_and_Balls.jpg"}
        A={"A: Björn Borg"} B={"B: Rod Laver"} C={"C: Pete Sampras"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vilket lag vann den allra första Football League(Premier league) serien 1888/1889 ?"} 
        img={"https://cdn.mos.cms.futurecdn.net/uAeAmWHaYUDyESjHp7Simm.jpg"}
        A={"A: Aston Villa"} B={"B: Accrington"} C={"C: Preston North End"} answer={"C"}
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>Julfilm</h2>
        <Card 
        number={1} 
        question={"Vilket år släpptes Grinchen ut?"}
        img={"https://img-cdn.sfanytime.com/COVERM/COVERM_4278dfec-4f68-46de-83d2-30671519d4fe_sv.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=59ec322d84896888f4845ab3807c565c"}
        A={"A: 2000"} B={"B: 2002"} C={"C: 2004"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"Vad heter Dan ekborgs karaktär i Tomten är far till alla barnen?"}
        img={"https://m.media-amazon.com/images/M/MV5BNTAyOGUzM2UtNDliNC00MmYxLWFkOWQtNDk3NWNkZDFiZGVhXkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_.jpg"}
        A={"A: Janne"} B={"B: Gunnar"} C={"C: Åke"} answer={"B"} 
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vad är handlingen i The Nightmare Before Christmas?"}
        img={"https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_761,w_1355,x_0,y_246/c_fill,f_auto,h_900,q_auto,w_1600/v1/m/f/5/f57f63d0c9d7fc78c988a083c93397f8f3e5cc46/20-facts-might-know-nightmare-before-christmas.jpg"}
        A={"A: The Nightmare Before Christmas handlar om Jack Skellington, ledaren för Halloween Town, som upptäcker Christmas Town och försöker ta över julen."} B={"B:I The Nightmare Before Christmas möter Jack Skellington en grupp monster som hjälper honom att sprida skräck på ett nytt sätt under julen."} C={"C: The Nightmare Before Christmas följer historien om Jack Skellington, som letar efter en ny plats att fira Halloween efter att ha tråkats med Halloween Town."} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"vilka är korrekt rankade enligt IMDB?"}
        img={"https://www.m3.se/wp-content/uploads/2023/05/2471966236.jpg?quality=50&strip=all"}
        A={"A: 1: Ensam Hemma / 2: Die hard / 3: Klaus"} B={"B: 1: Die hard / 2: Klaus / 3: Ensam hemma"} C={"C: 1: Klaus / 2: Ensam hemma / 3: Die hard"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={'I filmen "Home Alone" från 1990, vilken berömd skådespelare spelar den skurkaktiga karaktären Harry, en av tjuvarna som försöker bryta sig in i Kevin McCallisters hus?'}
        img={"https://www.hollywoodreporter.com/wp-content/uploads/2020/11/HomeAlone1990_301-H-2020-1605218050.jpg?w=1296"}
        A={"A: Joe Pesci"} B={"B: Daniel Stern"} C={"C: John Candy"} answer={"A"} 
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>TV-Serie</h2>
        <Card 
        number={1} 
        question={'Vem är "assistent to the reginal manager" i serien The office?'}
        img={"https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/library/theoffice/mainpage/office-vertical-art.jpg/_jcr_content/renditions/original.JPEG"}
        A={"A: Dwight"} B={"B: Jim"} C={"C: Andy"} answer={"A"} 
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={'Vad heter denna karaktär?'} 
        img={"https://cdn.mos.cms.futurecdn.net/noiRrtGS6iDdAsFaDKEySM-1200-80.jpg"}
        A={"A: Baby yoda"} B={"B: Grogu"} C={"C: Greedo"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={"Vilket vapen är House Mormonts vapen i Game of Thrones?"} 
        img={"https://sm.mashable.com/mashable_in/photo/default/house-mormont-game-of-thrones_7u7s.jpg"}
        A={"A: En gycklande narr"} B={"B: En svart bäver"} C={"C: En brun björn"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Vad heter Leyas företag i snabba cash?"} 
        img={"https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/443378/b0c994b8c72c0182610073e908815237-Screenshot_202022-09-25_2012.03.30.png"}
        A={"A: TargetCoach"} B={"B: InfoCoach"} C={"C: BusinessCoach"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vad är namnet på den mystiska mannen i hatt som återkommer i olika tidsepoker och ser ut att ha en djupare koppling till Westworlds historia?"} 
        img={"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/39e9fe20301fdaa40652e548df2a3e018d9f61692adea57823f1e8afe9538f9f._RI_TTW_SX720_FMjpg_.jpg"}
        A={"A: The Man in Black"} B={"B: The Stranger"} C={"C: The Wanderer"} answer={"A"}
        countPoint={countPoint}></Card>
      </div>
      <div>
        <h2 className='category'>Världen</h2>
        <Card 
        number={1} 
        question={"hur många kontinenter finns det?"} 
        img={"https://static.bimago.pl/mediacache/catalog/product/cache/2/4/122342/image/750x1120/8b2d3c6ce1e565057330a94a6945066d/122342_5.jpg"}
        A={"A: 6"} B={"B: 7"} C={"C: 8"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={2} 
        question={"Vilket land har högst brottslighet i världen?"} 
        img={"https://tbf.goteborgsregionen.se/images/18.352fde5d186a1da58d3d184e/1679270462550/organiserad-brottslighet.jpg"}
        A={"A: Sydafrika"} B={"B: Papua Nya Guinea"} C={"C: Venezuela"} answer={"C"}
        countPoint={countPoint}></Card>
        <Card 
        number={3} 
        question={'Vilken stad kallas för "Den eviga staden"?'} 
        img={"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKa1xootiMRY/v1/-1x-1.jpg"}
        A={"A: Florens"} B={"B: Rom"} C={"C: Neapel"} answer={"B"}
        countPoint={countPoint}></Card>
        <Card 
        number={4} 
        question={"Vilken viking var känd för att ha upptäckt Nordamerika långt före Columbus?"} 
        img={"https://images.bonnier.cloud/files/phi/production/2021/07/29113053/vikingar-i-osterled-zEUqxsTPXv9arfmNzCgO8w.jpg"}
        A={"A: Leif Eriksson - En nordisk vikingakrigare och son till Erik den Röde"} B={"B: Bjarni Herjólfsson - En vikingakapten som oavsiktligt siktade Nordamerika under en färd till Grönland"} C={"C: Olav Tryggvason - En norsk kung som genomförde expeditioner till okända territorier"} answer={"A"}
        countPoint={countPoint}></Card>
        <Card 
        number={5} 
        question={"Vad heter vulkanen i södra Italien som ödelade Pompeji och flera andra städer 79 e.kr.?"} 
        img={"https://www.checkpointtravel.se/media/19610/shutterstock_569944639.jpg?width=1920&height=1280&format=webp&autoorient=true"}
        A={"A: Vesuvius"} B={"B: Stromboli"} C={"C: Popocatépetl"} answer={"A"} 
        countPoint={countPoint}></Card>
      </div>
      </div>
    </>
  );
};

export default Game;
