angular.module('starter.services', [])

/*** A simple example service that returns some data. */

.factory(("ionPlatform"), function( $q ){
    var ready = $q.defer();

    ionic.Platform.ready(function( device ){
        ready.resolve( device );
    });

    return {
        ready: ready.promise
    }
})
 
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  var events = [
    { id: 0, name: '0900 Gates Open'},
    { id: 1, name: '1100 Invocation'},
    { id: 2, name: '1110 Various Performers'},
    { id: 3, name: '1630 Airshow ends' }
  ];
  
  var events2 = [
    { id: 0, name: '0900 Gates Open'},
    { id: 1, name: '1100 Invocation'},
    { id: 2, name: '1110 Various Performers'},
    { id: 3, name: '1630 Airshow ends' }
  ];

  return {
    all: function() {
      return events;
    },
    
    plus: function() {
      return events2;
    }    
  }
})

.factory('Aircrafts', function() {
  // Might use a resource here that returns a JSON array

  var aircrafts = [
    { id: 0, divider: 'isDivider', name: 'Static Displays'},
    { id: 1, name: 'F-35 Lightning II', img: 'img/f35.jpg', tmb: 'img/thumbnails/f35.jpg', text: 'F-35 Lightning II Manufacturer: Lockheed Martin Introduction: Jul 2015 Cost: Full rate production $85 million by 2018 Maximum speed: 1,218mph (Mach 1.6) Wingspan: 35ft Height: 14.2ft Max takeoff wiehgt: 70,000lbs.  More info at', link: 'http://www.af.mil/AboutUs/FactSheets/Display/tabid/224/Article/478441/f-35a-lightning-ii-conventional-takeoff-and-landing-variant.aspx' },
    { id: 2, name: 'F-22 Raptor', img: 'img/f22.jpg', tmb: 'img/thumbnails/f22.jpg', text: 'F22 Manufacturer: Lockheed Martin Introduction: Dec 2005 Cost: 150 million Maximum speed: 1500mph (Mach 2.25) Wingspan: 44ft Height:16ft Max takeoff weight: 83,500lbs.  More info at', link: 'http://www.af.mil/AboutUs/FactSheets/Display/tabid/224/Article/104506/f-22-raptor.aspx'},
    { id: 3, name: 'KC-135 Stratotanker', img: 'img/kc135.jpg', tmb: 'img/thumbnails/kc135.jpg', text: 'KC135 Manufacturer: Boeing Introduction: June 1957 Cost: 39.6 million in 1998 Maximum speed: 580mph Wingspan 131ft Height: 41ft Max takeoff weight: 322,500lbs'},
    { id: 4, name: 'C-17 Globemaster III', img: 'img/c17.jpg', tmb: 'img/thumbnails/c17.jpg', text: 'C17 Manufacturer: McDonnell Douglas Introduction: Jan 1995 Cost: 218 million in 2007 Maximum speed: 515mph Wingspan:169ft Height: 55ft Max takeoff weight: 585,000lbs'},
    { id: 5, name: 'B-52 Stratofortress', img: 'img/b52.jpg', tmb: 'img/thumbnails/b52.jpg', text: 'B52 Manufacturer Introduction: Feb 1955 Cost: 53.4 million in 1998 Maximum speed: 650mph Wingspan: 185ft Height: 40ft Max takeoff weight: 488,000lbs'},
    { id: 6, name: 'A-10 Thunderbolt II', img: 'img/a10.jpg', tmb: 'img/thumbnails/a10.jpg', text: 'A10 Manufacturer: Fairchild Republic Introduction: March 1977 Cost: 11.8 million in 1994 Maximum speed: 518mph Wingspan: 57ft Height: 14ft Max takeoff weight: 50,000lbs'},
    { id: 7, name: 'CV-22 Osprey', img: 'img/cv22.jpg', tmb: 'img/thumbnails/cv22.jpg', text: 'CV22 Manufacturer: Bell helicopter Introduction: June 2007 Cost: 72 million in 2015 Maximum speed: 316mph Wingspan: 45ft Height: 22ft Max takeoff weight: 60,500lbs'},
    { id: 8, name: 'MQ-1B Predator', img: 'img/mq1.jpg', tmb: 'img/thumbnails/mq1.jpg', text: 'MQ1 Manufacturer: General Atomics Aeronautical Systems Introduction: July 1995 Cost: 4.03 million in 2010 Maximum speed: 135mph Wingspan: 48ft Height: 7ft Max takeoff weight: 2250lbs'},
    { id: 9, name: 'T-38 Talon', img: 'img/t38.jpg', tmb: 'img/thumbnails/t38.jpg', text: 'T38 Manufacturer: Northrop Corporation Introduction: March 1961 Cost: 5.879 million in 2013 Maximum speed: 858mph (Mach 1.3) Wingspan: 25ft Height: 12ft Max takeoff weight: 12,093lbs'},
    { id: 10, name: 'SNJ T-6 Texan', img: 'img/snjt6.jpg', tmb: 'img/thumbnails/snjt6.jpg', text: 'No other trainer of Western origin has ever come close to the record of the T-6 for longevity and production totals. It entered service in 1936 and 21,342 were built, with many still in service today. The T-6 began life as the NA-16 prototype and first flew in April 1935. After a slow start, production accelerated rapidly just before and during WWII. More info at', link: 'http://www.hill.af.mil/library/factsheets/factsheet.asp?id=5665'},
    { id: 11, name: 'RC-135V/W Rivet Joint', img: 'img/rc135.jpg', tmb: 'img/thumbnails/rc135.jpg', text: 'RC135V/W Manufacturer: Boeing Maximum speed: 580mph Wingspan: 130ft Height: 41ft Max takeoff weight: 322,500lbs'},
    { id: 12, name: 'F-15E Strike Eagle', img: 'img/f15.jpg', tmb: 'img/thumbnails/f15.jpg', text: 'F15E Strike Eagle Manufacturer: McDonnell Douglas Introduction: Jan 1976 Cost: 30 million in 1998 Maximum speed: 1,650mph (Mach 2.5) Wingspan: 42ft Height: 18ft Max takeoff weight: 68,000lbs'},
    { id: 13, name: 'F-18 Super Hornet', img: 'img/f18.jpg', tmb: 'img/thumbnails/f18.jpg', text: 'F/A 18 Manufacturer: McDonnell Douglas Introduction: Jan 1983 Cost: 29-57 million in 2006 Maximum speed: 1190mph (Mach 1.8) Wingspan: 40ft Height: 15ft Max takeoff weight: 51,900lbs'},
    { id: 14, name: 'C-45H Expeditor', img: 'img/c45.jpg', tmb: 'img/thumbnails/c45.jpg', text: 'The C-45 was the World War II military version of the popular Beechcraft Model 18 commercial light transport. Beech built a total of 4,526 of these aircraft for the Army Air Forces between 1939 and 1945 in four versions, the AT-7 Navigator navigation trainer, the AT-11 Kansan bombing-gunnery trainer, the C-45 Expeditor utility transport and the F-2 for aerial photography and mapping. The AT-7 and AT-11 versions were well-known to WWII navigators and bombardiers, for most of these men received their training in these aircraft. Thousands of AAF pilot cadets also were given advanced training in twin-engine Beech airplanes. More info at', link: 'http://www.nationalmuseum.af.mil/factsheets/factsheet.asp?id=577'},
    { id: 15, name: 'T-1A Jayhawk', img: 'img/t1a.jpg', tmb: 'img/thumbnails/t1a.jpg', text: 'The T-1A Jayhawk is a medium-range, twin-engine jet trainer used in the advanced phase of specialized undergraduate pilot training for students selected to fly airlift or tanker aircraft. It is also used to support navigator training for the U.S. Air Force, Navy, Marine Corps and international services.  More info at', link: 'http://www.af.mil/AboutUs/FactSheets/Display/tabid/224/Article/104542/t-1a-jayhawk.aspx'},
    { id: 16, name: 'T-6 Texan II', img: 'img/t6.jpg', tmb: 'img/thumbnails/t6.jpg', text: 'T-6 Manufacturer: Raytheon Aircraft Company Introduction: 2001 Maximum speed: 364mph Wingspan: 33ft Height: 10ft Max takeoff weight: 6,500lbs'},
    { id: 17, name: 'AH-64D Apache', img: 'img/ah64d.jpg', tmb: 'img/thumbnails/ah64d.jpg', text: 'The AH-64 Apache is a twin-engine, four bladed, multi-mission attack helicopter designed as a highly stable aerial weapons-delivery platform. With a tandem-seated crew consisting of the pilot, located in the rear cockpit position and the co-pilot gunner (CPG), located in the front position. The helicopter is designed as a weapons delivery platform and is equipped with: a M230E1, 30mm automatic gun, aerial rockets system (2.75 inch folding fin), and point target weapons system (Hellfire missiles). It is highly mobile, lethal, and can destroy armor, personnel, and materiel targets in obscured battlefield conditions at ranges out to 8 kms. More info at', link: 'http://www.army.mil/article/137579/'},
    { id: 18, name: 'HH-60 Blackhawk', img: 'img/hh60.jpg', tmb: 'img/thumbnails/hh60.jpg', text: 'The primary mission of the HH-60G Pave Hawk helicopter is to conduct day or night personnel recovery operations into hostile environments to recover isolated personnel during war. The HH-60G is also tasked to perform military operations other than war, including civil search and rescue, medical evacuation, disaster response, humanitarian assistance, security cooperation/aviation advisory, NASA space flight support, and rescue command and control. More info at', link: 'http://www.176wg.ang.af.mil/resources/factsheets/factsheet.asp?id=11895'},
    { id: 19, name: 'CH-47 Chinook', img: 'img/ch47.jpg', tmb: 'img/thumbnails/ch47.jpg', text: 'The CH-47 Chinook Supports a full spectrum of operations including disaster relief, homeland defense and security, and current overseas contingency operations with a Future Force system design. More info at', link: 'http://www.army.mil/article/137584/' },
    { id: 20, name: 'Air Force Rapid Strike Simulator', img: 'img/afrapid.jpg', tmb: 'img/thumbnails/afrapid.jpg', text: 'The Rapid Strike Simulator allows visitors to experience an Air Force mission from a first person perspective, including an F-22 interceptor mission and a Special Forces mission. More info at', link: 'http://www.nellis.af.mil/news/story.asp?id=123325976' },
    { id: 21, divider: 'isDivider', name: 'Performers'},
    { id: 22, name: 'AV-8B Harrier', img: 'img/av8b.jpg', tmb: 'img/thumbnails/av8b.jpg', text: 'AV8 Harrier Manufacturer: McDonnell Douglas Introduction: Jan 1985 Cost: 24-30 million in 1996 Maximum speed: 673mph Wingspan: 30ft Height: 11ft Max takeoff weight: 31,000lbs'},
    { id: 23, name: 'USAF Thunderbirds', img: 'img/thunderbirds.jpg', tmb: 'img/thumbnails/thunderbirds.jpg', text: 'The USAF Air Demonstration Squadron ("Thunderbirds") is the air demonstration squadron of the United States Air Force (USAF). The Thunderbirds are assigned to the 57th Wing, and are based at Nellis AFB, Nevada. Created in 1953, the USAF Thunderbirds are the third oldest formal flying aerobatic team (under the same name) in the world, after the US Navy Blue Angels formed in 1946 and the prestigious French Air Force Patrouille de France formed in 1931. More info at', link: 'http://afthunderbirds.com/site/'},
    { id: 24, name: 'Army Golden Knights', img: 'img/goldenknights.jpg', tmb: 'img/thumbnails/goldenknights.jpg', text: 'The United States Army Parachute Team, nicknamed “The Golden Knights,” is the U.S. Army’s official aerial demonstration team. The Team travels around the United States, performing parachute demonstrations at air shows, major league football and baseball games, and special events, connecting the Army with the American people. More info at', link: 'http://armygk.armylive.dodlive.mil/' },
    { id: 25, name: 'Wings of Blue', img: 'img/wingsofblue.jpg', tmb: 'img/thumbnails/wingsofblue.jpg', text: 'The Wings of Blue have a long standing commitment to personal and organizational excellence as well as a storied history of success. While the airspace that the Wings of Blue operates in is one of the busiest in the world, their drop zone is one of the safest. The primary mission of the Wings of Blue is to run the Air Force’s Basic Freefall Parachuting course, known as Airmanship 490 (AM-490). Members of the team serve primarily as jumpmasters and instructors for this course, devoting most of their time to teaching students about parachuting and training them to make unassisted freefall skydives. AM-490 is the only first-jump program in the world where students can make their first freefall jump without assistance. Each year, over 700 cadets are given the opportunity to take AM-490 and earn their jump wings. More info at', link:'http://wingsofblue.com/'},
    { id: 26, name: 'Vietnam CAS demo team', img: 'img/a37.jpg', tmb: 'img/thumbnails/a37.jpg', text: 'Vietnam Close Air Support (CAS) demonstration with C-7 Caribou, AD-5 Skyraider, O-2 Skymaster, and A-37 Dragonfly' },
    { id: 27, name: 'Adam Baker, Playful Airshows', img: 'img/adambaker.jpg', tmb: 'img/thumbnails/adambaker.jpg', text: 'Adam has a unique style of aerobatic flying, combining hard competition style precision with out of this world freestyle gyroscopic maneuvers that set him apart from all other airshow pilots. He redefines the flight envelope of the Extra 330 creating maneuvers that make spectators wonder “how did he do that?” More info at', link: 'http://adambakeraerobatics.com/'},
    { id: 28, name: 'Andrew Wright, Carbon Fiber Airshows', img: 'img/andrewwright.jpg', tmb: 'img/thumbnails/andrewwright.jpg', text: 'Andrew Wright has been flying competition and airshow aerobatics in the G202 since 2001.  He has over 1000 hours in type. With his extensive competition experience, he flies a unique blend of ultra-precise competition figures and classic airshow maneuvers, including 4-point rolls, snap rolls, torque rolls, tumbles, tail slides, and even an outside micro loop, all right in front of the crowd. More info at', link: 'http://www.carbonfiberairshows.com/#!photos/cq64'},
    { id: 29, name: 'Jason Newburg, Viper Airshows', img: 'img/pittsviper2.JPG', tmb: 'img/thumbnails/pittsviper2.JPG', text: 'Jason Newburg is an extreme aerobatic pilot who loves to share his high energy performances with airshow audiences around the country.  He keeps Viper spectators on the edge of their seats and leaves them begging for more. More info at', link: 'http://www.viperairshows.com/'},
    { id: 30, name: 'B-1B Lancer', img: 'img/b1.jpg', tmb: 'img/thumbnails/b1.jpg', text: 'B-1B  Lancer Manufacturer: Rockwell Introduction:  October 1986 Cost: 283.1 million in 1998 Maximum speed: 950mph (Mach 1.25) Wingspan: 137ft Height: 34ft Max takeoff weight: 447,000lbs'},
    { id: 31, name: 'C-130J Super Hercules', img: 'img/c130j.jpg', tmb: 'img/thumbnails/c130j.jpg', text: 'C130/J “Super Hercules” Manufacturer: Lockheed Martin Introduction: 1999 Cost: 67.3 million in 2013 Maximum speed: 417mph Wingspan 132ft Height: 39ft Max Takeoff weight: 175,000lbs'},
    { id: 32, name: 'PT-19A Cornell', img: 'img/pt19a.jpg', tmb: 'img/thumbnails/pt19a.jpg', text: 'Fairchild developed the PT-19 in 1938 to satisfy a military requirement for a rugged monoplane primary trainer, and it went into quantity production in 1940. More info at', link: 'http://www.nationalmuseum.af.mil/factsheets/factsheet.asp?id=351'},
    { id: 33, name: 'B-17 Flying Fortress', img: 'img/b17.jpg', tmb: 'img/thumbnails/b17.jpg', text: 'The Flying Fortress is one of the most famous airplanes ever built. The B-17 prototype first flew on July 28, 1935. Although few B-17s were in service on Dec. 7, 1941, production quickly accelerated after the U.S. entry into World War II. The aircraft served in every combat zone, but it is best known for the daylight strategic bombing of German industrial targets. Production ended in May 1945 and totaled 12,726. More info at', link: 'http://www.nationalmuseum.af.mil/factsheets/factsheet.asp?id=512' },
    { id: 34, name: 'B-25B Mitchell', img: 'img/b25.jpg', tmb: 'img/thumbnails/b25.jpg', text: 'The B-25 medium bomber was one of Americas most famous airplanes of World War II. It was the type used by Gen. Jimmy Doolittle for the Tokyo Raid on April 18, 1942. More info at', link: 'http://www.nationalmuseum.af.mil/factsheets/factsheet.asp?id=476' },
    { id: 35, name: 'A-26C Invader', img: 'img/a26.jpg', tmb: 'img/thumbnails/a26.jpg', text: 'The Douglas B-26 (originally designated the A-26) was a World War II attack aircraft used for level bombing, ground strafing, and rocket attacks. It made its first flight in July 1942, and production delivery began in August 1943. The A-26 entered combat over Europe in November 1944. When production halted after the war, 2,502 Invaders had been built. The A-26 was redesignated the B-26 in 1948 (thus creating everlasting confusion with the WWII Martin B-26 Marauder). More info at', link: 'http://www.nationalmuseum.af.mil/factsheets/factsheet.asp?id=285'},
    { id: 36, name: 'MIG-17F', img: 'img/mig17.jpg', tmb: 'img/thumbnails/mig17.jpg', text: 'Made famous by the Vietnam War, the MiG-17F was the primary enemy aircraft engaged in the skies over Vietnam by U.S. aircraft, such as the A-4,A-7, F-8, B-52, F-100, F-105 and its primary nemesis, the F-4 Phantom II. More info at', link: 'http://www.fighterjets.com/mig17.asp'}
  ];
  
  return {
    all: function() {
      return aircrafts;
    },
    get: function(aircraftId) {
      // Simple index lookup
      return aircrafts[aircraftId];
    }
  }
});

