var UI = require('ui');
var menu = new UI.Menu({
    sections: [{
        title: 'Select Defender',
        items: [{
            title: 'Bulbasaur',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Ivysaur',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Venusaur',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Charmander',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Blstoise'
        }, {
            title: 'Charmeleon',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Blstoise'
        }, {
            title: 'Charizard',
            subtitle: 'Weak to Water, Rock, Ground, and Electric. Ideal Pokemon are Golem, Omastar, and Dragonite'
        }, {
            title: 'Squirtle',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Wartortle',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Venusaur'
        }, {
            title: 'Blastoise',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Vileplume'
        }, {
            title: 'Caterpie',
            subtitle: 'Weak to Fire, Rock, and Flying. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Metapod',
            subtitle: 'Weak to Fire, Rock, and Flying. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Butterfree',
            subtitle: 'Weak to Fire, Rock, Flying, Ice, and Electric. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Weedle',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Kakuna',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Beedrill',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Pidgey',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Dragonite, and Golem'
        }, {
            title: 'Pidgeotto',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Jolteon, and Electabuzz'
        }, {
            title: 'Pidgeot',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Dragonite, and Jolteon'
        }, {
            title: 'Rattata',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Raticate',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Spearow',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Dragonite, and Golem'
        }, {
            title: 'Fearow',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Dragonite, Magneton, and Cloyster'
        }, {
            title: 'Ekans',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Arbok',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Pikachu',
            subtitle: 'Weak to Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Raichu',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Exeggutor, Venusaur'
        }, {
            title: 'Sandshrew',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Victreebel, Dragonite, and Vileplume'
        }, {
            title: 'Sandslash',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Victreebel, Dragonite, and Vileplume'
        }, {
            title: 'Nidoran (Female)',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidorina',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidoqueen',
            subtitle: 'Weak to Psychich, Ice, and Water. Ideal Pokemon are Dragonite, Cloyster, and Exeggutor'
        }, {
            title: 'Nidoran (Male)',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidorino',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidoking',
            subtitle: 'Weak to Psychic, Ice, and Water. Ideal Pokemon are Dragonite, Cloyster, and Exeggutor'
        }, {
            title: 'Clefairy',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Clefable',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Vulpix',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Golem'
        }, {
            title: 'Ninetales',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Blastoise'
        }, {
            title: 'Jigglypuff',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Wigglytuff',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Zubat',
            subtitle: 'Weak to Psychic, Ice, Electric, Rock, and Ground. Ideal Pokemon are Dragonite, Magneton, and Golem'
        }, {
            title: 'Golbat',
            subtitle: 'Weak to Psychic, Ice, Electric, Rock, and Ground. Ideal Pokemon are Dragonite, Magneton, and Golem'
        }, {
            title: 'Oddish',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Gloom',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Vileplume',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Paras',
            subtitle: 'Weak to Flying, Fire, Poison, Rock, Bug, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Parasect',
            subtitle: 'Weak to Flying, Fire, Poison, Rock, Bug, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Venonat',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Venomoth',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Diglett',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Dugtrio',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Meowth',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Persian',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Psyduck',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Golduck',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Mankey',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Dragonite, Charizard, and Exeggutor'
        }, {
            title: 'Primeape',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Dragonite, Charizard, and Exeggutor'
        }, {
            title: 'Growlithe',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Golem'
        }, {
            title: 'Arcanine',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Blastoise, and Omastar'
        }, {
            title: 'Poliwag',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Poliwhirl',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Poliwrath',
            subtitle: 'Weak to Fairy, Flying, Electric, and Pyschic. Ideal Pokemon are Exeggutor, Victreebel, and Venusaur'
        }, {
            title: 'Abra',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Kadabra',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Alakazam',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Machop',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Machoke',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Machamp',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Bellsprout',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Weepinbell',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Victreebel',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Tentacool',
            subtitle: 'Weak to Psychic, Electric, and Ground. Ideal Pokemon are Exeggutor, Dragonite, and Electabuzz'
        }, {
            title: 'Tentacruel',
            subtitle: 'Weak to Psychic, Electric, and Ground. Ideal Pokemon are Exeggutor, Dragonite, and Magneton'
        }, {
            title: 'Geodude',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Graveler',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Golem',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Ponyta',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Golem'
        }, {
            title: 'Rapidash',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Starmine, and Omastar'
        }, {
            title: 'Slowpoke',
            subtitle: 'Weak to Bug, Electric, Grass, Ghost, and Dragon. Ideal Pokemon are Dragonite, Victeerbel, and Magneton'
        }, {
            title: 'Slowbro',
            subtitle: 'Weak to Bug, Electric, Grass, Ghost, and Dragon. Ideal Pokemon are Dragonite, Victeerbel, and Magneton'
        }, {
            title: 'Magnemite',
            subtitle: 'Weak to Ground, Fighting, and Fire. Ideal Pokemon are Golem, Flareon, and Arcanine'
        }, {
            title: 'Magneton',
            subtitle: 'Weak to Ground, Fighting, and Fire. Ideal Pokemon are Golem, Flareon, and Arcanine'
        }, {
            title: "Farfetch'd",
            subtitle: 'Weak to Ice, Electric, and Rock. Ideal Pokemon are Dragonite, Magneton, and Flareon'
        }, {
            title: 'Doduo',
            subtitle: 'Weak to Ice, Electric, and Rock. Ideal Pokemon are Dragonite, Magneton, and Golem'
        }, {
            title: 'Dodrio',
            subtitle: 'Weak to Ice, Electric, and Rock. Ideal Pokemon are Magneton, Dragonite, and Jolteon'
        }, {
            title: 'Seel',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Dewgong',
            subtitle: 'Weak to Rock, Fighting, Electric, and Grass. Ideal Pokemon are Magneton, Flareon, and Machamp'
        }, {
            title: 'Grimer',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Muk',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Shellder',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Cloyster',
            subtitle: 'Weak to Rock, Fighting, Electric, and Grass. Ideal Pokemon are Magneton, Flareon, and Machamp'
        }, {
            title: 'Gastly',
            subtitle: 'Weak to Ghost, Psychic, and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Flareon'
        }, {
            title: 'Haunter',
            subtitle: 'Weak to Ghost, Psychic, and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Flareon'
        }, {
            title: 'Gengar',
            subtitle: 'Weak to Ghost, Psychic, and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Onix',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Drowzee',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Hypno',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Krabby',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Kingler',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Voltorb',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Golem, and Flareon'
        }, {
            title: 'Electrode',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Exeggcute',
            subtitle: 'Weak to Bug, Dragon, Flying, Ghost, Ice, Poison, and Fire. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Exeggutor',
            subtitle: 'Weak to Bug, Dragon, Flying, Ghost, Ice, Poison, and Fire. Ideal Pokemon are Flareon, Arcanine, and Syther'
        }, {
            title: 'Cubone',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Marowak',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Hitmonlee',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Hitmonchan',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Lickitung',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Flareon, and Machamp'
        }, {
            title: 'Koffing',
            subtitle: 'Weak to Psychic, and Ground. Ideal Pokemon are Golem, Dragonite, Exeggutor'
        }, {
            title: 'Weezing',
            subtitle: 'Weak to Psychic, and Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Rhyhorn',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Rhydon',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Chansey',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Flareon, and Exeggutor'
        }, {
            title: 'Tangela',
            subtitle: 'Weak to Ice, Fire, Bug, Poison, and Flying. Ideal Pokemon are Flareon, Dragonite, and Arcanine'
        }, {
            title: 'Kangaskhan',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Horsea',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Venusaur'
        }, {
            title: 'Seadra',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Goldeen',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Vileplume'
        }, {
            title: 'Seaking',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Magneton'
        }, {
            title: 'Staryu',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Venusaur'
        }, {
            title: 'Starmie',
            subtitle: 'Weak to Bug, Electric, Grass, Ghost, and Dragon. Ideal Pokemon are Dragonite, Victreebel, and Vileplume'
        }, {
            title: 'Mr. Mime',
            subtitle: 'Weak to Ghost, Dragon, and Poison. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Scyther',
            subtitle: 'Weak to Rock, Fire, Flying, Ice, and Electric. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Jynx',
            subtitle: 'Weak to Dragon, Ghost, Bug, Fire, and Rock. Ideal Pokemon are Flareon, Arcanine, and Magmar'
        }, {
            title: 'Electabuzz',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Exeggutor, and Venusaur'
        }, {
            title: 'Magmar',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Starmie'
        }, {
            title: 'Pinsir',
            subtitle: 'Weak to Fire, Rock, and Flying. Ideal Pokemon are Flareon, Chrizard, and Arcanine'
        }, {
            title: 'Tauros',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Magikarp',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Gyarados',
            subtitle: 'Weak to Electric and Rock. Ideal Pokemon are Magneton, Riachu, and Electabuzz'
        }, {
            title: 'Lapras',
            subtitle: 'Weak to Rock, Fighting, Electric, and Grass. Ideal Pokemon are Magneton, Flareon, and Arcanine'
        }, {
            title: 'Ditto',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Eevee',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Vaporeon',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Jolteon',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Flareon',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Starmie'
        }, {
            title: 'Porygon',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Flareon, and Machamp'
        }, {
            title: 'Omanyte',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Omastar',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Kabuto',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Kabutops',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Aerodactyl',
            subtitle: 'Weak to Ice, Water, Ground, Electric, and Rock. Ideal Pokemon are Magneton, Dragonite, and Blastoise'
        }, {
            title: 'Snorlax',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Articuno',
            subtitle: 'Weak to Rock, Fire, and Electric. Ideal Pokemon are Flareon, Arcanine, and Magmar'
        }, {
            title: 'Zapdos',
            subtitle: 'Weak to Ice, Rock, and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Moltres',
            subtitle: 'Weak to Rock, Ground, Water, and Electric. Ideal Pokemon are Golem, Omastar, and Dragonite'
        }, {
            title: 'Dratini',
            subtitle: 'Weak to Fairy, Dragon, and Ice. Ideal Pokemon are Dragonite, Cloyster, and Laparas'
        }, {
            title: 'Dragonair',
            subtitle: 'Weak to Fairy, Dragon, and Ice. Ideal Pokemon are Dragonite, Cloyster, and Laparas'
        }, {
            title: 'Dragonite',
            subtitle: 'Weak to Fairy, Dragon, Rock, and Ice. Ideal Pokemon are Cloyster, Dragonite, and Laparas'
        }, {
            title: 'Mewtwo',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Mew',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }]
    }]
});
menu.on('select', function(e) {
    var main = new UI.Card({
        scrollable: true,
        title: e.item.title,
        body: e.item.subtitle
    });
    main.show();
});

var menu2 = new UI.Menu({
    sections: [{
        title: 'Select Defender',
        items: [{
            title: 'Abra',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Aerodactyl',
            subtitle: 'Weak to Ice, Water, Ground, Electric, and Rock. Ideal Pokemon are Magneton, Dragonite, and Blastoise'
        }, {
            title: 'Alakazam',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Arbok',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Arcanine',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Blastoise, and Omastar'
        }, {
            title: 'Articuno',
            subtitle: 'Weak to Rock, Fire, and Electric. Ideal Pokemon are Flareon, Arcanine, and Magmar'
        }, {
            title: 'Beedrill',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Bellsprout',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Blastoise',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Vileplume'
        }, {
            title: 'Bulbasaur',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Butterfree',
            subtitle: 'Weak to Fire, Rock, Flying, Ice, and Electric. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Caterpie',
            subtitle: 'Weak to Fire, Rock, and Flying. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Chansey',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Flareon, and Exeggutor'
        }, {
            title: 'Charizard',
            subtitle: 'Weak to Water, Rock, Ground, and Electric. Ideal Pokemon are Golem, Omastar, and Dragonite'
        }, {
            title: 'Charmander',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Blstoise'
        }, {
            title: 'Charmeleon',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Blstoise'
        }, {
            title: 'Clefable',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Clefairy',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Cloyster',
            subtitle: 'Weak to Rock, Fighting, Electric, and Grass. Ideal Pokemon are Magneton, Flareon, and Machamp'
        }, {
            title: 'Cubone',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Dewgong',
            subtitle: 'Weak to Rock, Fighting, Electric, and Grass. Ideal Pokemon are Magneton, Flareon, and Machamp'
        }, {
            title: 'Diglett',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Ditto',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Dodrio',
            subtitle: 'Weak to Ice, Electric, and Rock. Ideal Pokemon are Magneton, Dragonite, and Jolteon'
        }, {
            title: 'Doduo',
            subtitle: 'Weak to Ice, Electric, and Rock. Ideal Pokemon are Dragonite, Magneton, and Golem'
        }, {
            title: 'Dragonair',
            subtitle: 'Weak to Fairy, Dragon, and Ice. Ideal Pokemon are Dragonite, Cloyster, and Laparas'
        }, {
            title: 'Dragonite',
            subtitle: 'Weak to Fairy, Dragon, Rock, and Ice. Ideal Pokemon are Cloyster, Dragonite, and Laparas'
        }, {
            title: 'Dratini',
            subtitle: 'Weak to Fairy, Dragon, and Ice. Ideal Pokemon are Dragonite, Cloyster, and Laparas'
        }, {
            title: 'Drowzee',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Dugtrio',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Eevee',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Ekans',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Electabuzz',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Exeggutor, and Venusaur'
        }, {
            title: 'Electrode',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Exeggcute',
            subtitle: 'Weak to Bug, Dragon, Flying, Ghost, Ice, Poison, and Fire. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Exeggutor',
            subtitle: 'Weak to Bug, Dragon, Flying, Ghost, Ice, Poison, and Fire. Ideal Pokemon are Flareon, Arcanine, and Syther'
        }, {
            title: "Farfetch'd",
            subtitle: 'Weak to Ice, Electric, and Rock. Ideal Pokemon are Dragonite, Magneton, and Flareon'
        }, {
            title: 'Fearow',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Dragonite, Magneton, and Cloyster'
        }, {
            title: 'Flareon',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Starmie'
        }, {
            title: 'Gastly',
            subtitle: 'Weak to Ghost, Psychic, and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Flareon'
        }, {
            title: 'Gengar',
            subtitle: 'Weak to Ghost, Psychic, and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Geodude',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Gloom',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Gloom',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Golbat',
            subtitle: 'Weak to Psychic, Ice, Electric, Rock, and Ground. Ideal Pokemon are Dragonite, Magneton, and Golem'
        }, {
            title: 'Goldeen',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Vileplume'
        }, {
            title: 'Golduck',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Golem',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Graveler',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Grimer',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Growlithe',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Golem'
        }, {
            title: 'Gyarados',
            subtitle: 'Weak to Electric and Rock. Ideal Pokemon are Magneton, Riachu, and Electabuzz'
        }, {
            title: 'Haunter',
            subtitle: 'Weak to Ghost, Psychic, and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Flareon'
        }, {
            title: 'Hitmonchan',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Hitmonlee',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Horsea',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Venusaur'
        }, {
            title: 'Hypno',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Ivysaur',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Jigglypuff',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Jolteon',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Jynx',
            subtitle: 'Weak to Dragon, Ghost, Bug, Fire, and Rock. Ideal Pokemon are Flareon, Arcanine, and Magmar'
        }, {
            title: 'Kabuto',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Kabutops',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Kadabra',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Kakuna',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Kangaskhan',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Kingler',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Koffing',
            subtitle: 'Weak to Psychic, and Ground. Ideal Pokemon are Golem, Dragonite, Exeggutor'
        }, {
            title: 'Krabby',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Lapras',
            subtitle: 'Weak to Rock, Fighting, Electric, and Grass. Ideal Pokemon are Magneton, Flareon, and Arcanine'
        }, {
            title: 'Lickitung',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Flareon, and Machamp'
        }, {
            title: 'Machamp',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Machoke',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Machop',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Exeggutor, Dragonite, and Charizard'
        }, {
            title: 'Magikarp',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Magmar',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Starmie'
        }, {
            title: 'Magnemite',
            subtitle: 'Weak to Ground, Fighting, and Fire. Ideal Pokemon are Golem, Flareon, and Arcanine'
        }, {
            title: 'Magneton',
            subtitle: 'Weak to Ground, Fighting, and Fire. Ideal Pokemon are Golem, Flareon, and Arcanine'
        }, {
            title: 'Marowak',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Meowth',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Metapod',
            subtitle: 'Weak to Fire, Rock, and Flying. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Mew',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Mewtwo',
            subtitle: 'Weak to Dragon, Ghost, and Bug. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Moltres',
            subtitle: 'Weak to Rock, Ground, Water, and Electric. Ideal Pokemon are Golem, Omastar, and Dragonite'
        }, {
            title: 'Mr. Mime',
            subtitle: 'Weak to Ghost, Dragon, and Poison. Ideal Pokemon are Dragonite, Flareon, and Arcanine'
        }, {
            title: 'Muk',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Exeggutor, and Golem'
        }, {
            title: 'Nidoking',
            subtitle: 'Weak to Psychic, Ice, and Water. Ideal Pokemon are Dragonite, Cloyster, and Exeggutor'
        }, {
            title: 'Nidoqueen',
            subtitle: 'Weak to Psychich, Ice, and Water. Ideal Pokemon are Dragonite, Cloyster, and Exeggutor'
        }, {
            title: 'Nidoran (Female)',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidoran (Male)',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidorina',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Nidorino',
            subtitle: 'Weak to Psychic and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Ninetales',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Blastoise'
        }, {
            title: 'Oddish',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Omanyte',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Omastar',
            subtitle: 'Weak to Grass, Fighting, Ground, and Electric. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Onix',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Paras',
            subtitle: 'Weak to Flying, Fire, Poison, Rock, Bug, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Parasect',
            subtitle: 'Weak to Flying, Fire, Poison, Rock, Bug, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Persian',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Pidgeot',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Dragonite, and Jolteon'
        }, {
            title: 'Pidgeotto',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Jolteon, and Electabuzz'
        }, {
            title: 'Pidgey',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Dragonite, and Golem'
        }, {
            title: 'Pikachu',
            subtitle: 'Weak to Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Pinsir',
            subtitle: 'Weak to Fire, Rock, and Flying. Ideal Pokemon are Flareon, Chrizard, and Arcanine'
        }, {
            title: 'Poliwag',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Poliwhirl',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Poliwrath',
            subtitle: 'Weak to Fairy, Flying, Electric, and Pyschic. Ideal Pokemon are Exeggutor, Victreebel, and Venusaur'
        }, {
            title: 'Ponyta',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Golem'
        }, {
            title: 'Porygon',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Flareon, and Machamp'
        }, {
            title: 'Primeape',
            subtitle: 'Weak to Fairy, Psychic, and Flying. Ideal Pokemon are Dragonite, Charizard, and Exeggutor'
        }, {
            title: 'Psyduck',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Exeggutor'
        }, {
            title: 'Raichu',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Exeggutor, Venusaur'
        }, {
            title: 'Rapidash',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Starmine, and Omastar'
        }, {
            title: 'Raticate',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Rattata',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Rhydon',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Rhyhorn',
            subtitle: 'Weak to Grass, Water, Fighting, and Ice. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Sandshrew',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Victreebel, Dragonite, and Vileplume'
        }, {
            title: 'Sandslash',
            subtitle: 'Weak to Ice, Grass, and Water. Ideal Pokemon are Victreebel, Dragonite, and Vileplume'
        }, {
            title: 'Scyther',
            subtitle: 'Weak to Rock, Fire, Flying, Ice, and Electric. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Seadra',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Seaking',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Magneton'
        }, {
            title: 'Seel',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Shellder',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Vileplume, and Venusaur'
        }, {
            title: 'Slowbro',
            subtitle: 'Weak to Bug, Electric, Grass, Ghost, and Dragon. Ideal Pokemon are Dragonite, Victeerbel, and Magneton'
        }, {
            title: 'Slowpoke',
            subtitle: 'Weak to Bug, Electric, Grass, Ghost, and Dragon. Ideal Pokemon are Dragonite, Victeerbel, and Magneton'
        }, {
            title: 'Snorlax',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Exeggutor'
        }, {
            title: 'Spearow',
            subtitle: 'Weak to Ice, Rock, and Electric. Ideal Pokemon are Magneton, Dragonite, and Golem'
        }, {
            title: 'Squirtle',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Starmie',
            subtitle: 'Weak to Bug, Electric, Grass, Ghost, and Dragon. Ideal Pokemon are Dragonite, Victreebel, and Vileplume'
        }, {
            title: 'Staryu',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Venusaur'
        }, {
            title: 'Tangela',
            subtitle: 'Weak to Ice, Fire, Bug, Poison, and Flying. Ideal Pokemon are Flareon, Dragonite, and Arcanine'
        }, {
            title: 'Tauros',
            subtitle: 'Weak to Fighting. Ideal Pokemon are Dragonite, Machamp, and Flareon'
        }, {
            title: 'Tentacool',
            subtitle: 'Weak to Psychic, Electric, and Ground. Ideal Pokemon are Exeggutor, Dragonite, and Electabuzz'
        }, {
            title: 'Tentacruel',
            subtitle: 'Weak to Psychic, Electric, and Ground. Ideal Pokemon are Exeggutor, Dragonite, and Magneton'
        }, {
            title: 'Vaporeon',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Dragonite, Victreebel, and Venusaur'
        }, {
            title: 'Venomoth',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Venonat',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Venusaur',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Victreebel',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Vileplume',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Voltorb',
            subtitle: 'Weak to Ground. Ideal Pokemon are Dragonite, Golem, and Flareon'
        }, {
            title: 'Vulpix',
            subtitle: 'Weak to Water, Rock, and Ground. Ideal Pokemon are Dragonite, Omastar, and Golem'
        }, {
            title: 'Wartortle',
            subtitle: 'Weak to Electric and Grass. Ideal Pokemon are Victreebel, Dragonite, and Venusaur'
        }, {
            title: 'Weedle',
            subtitle: 'Weak to Fire, Rock, Flying, and Psychic. Ideal Pokemon are Flareon, Arcanine, and Charizard'
        }, {
            title: 'Weepinbell',
            subtitle: 'Weak to Flying, Psychic, Fire, Ground, and Ice. Ideal Pokemon are Flareon, Arcanine, and Dragonite'
        }, {
            title: 'Weezing',
            subtitle: 'Weak to Psychic, and Ground. Ideal Pokemon are Golem, Dragonite, and Exeggutor'
        }, {
            title: 'Wigglytuff',
            subtitle: 'Weak to Poison. Ideal Pokemon are Victreebel, Vileplume, and Flareon'
        }, {
            title: 'Zapdos',
            subtitle: 'Weak to Ice, Rock, and Ground. Ideal Pokemon are Dragonite, Golem, and Exeggutor'
        }, {
            title: 'Zubat',
            subtitle: 'Weak to Psychic, Ice, Electric, Rock, and Ground. Ideal Pokemon are Dragonite, Magneton, and Golem'
        }]
    }]
});
menu2.on('select', function(e) {
    var main = new UI.Card({
        scrollable: true,
        title: e.item.title,
        body: e.item.subtitle
    });
    main.show();
});
var mm = new UI.Menu({
    sections: [{
      title: 'Sort by:',
        items: [{
            title: 'Pokedex Number'
        }, {
            title: 'Alphabetically'
        }]
    }]
});
mm.on('select', function(e) {
  if (e.item.title == 'Pokedex Number') {
    menu.show();
  } else {
    menu2.show();
  }
});
mm.show();