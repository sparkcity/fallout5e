import { DND5E } from '/systems/dnd5e/module/config.js';

//Changing out deprecated 5e skills to the replacement
DND5E.skills["arc"] = "Pre-War Knowledge";

//Changing languages
DND5E.languages["common"]="Binario";
DND5E.languages["aarakocra"]="Común";
DND5E.languages["abyssal"]="Mutante";
DND5E.languages["aquan"]="Ghoul";
DND5E.languages["auran"]="Tribal";
DND5E.languages["celestial"]="Raider";
DND5E.languages["deep"]="Reptiliano";
DND5E.languages["draconic"]="Clave";
DND5E.languages["druidic"]="Lengua Oscura";
DND5E.languages["dwarvish"]="Clicker";

//Changing weapon types
DND5E.weaponTypes["simpleM"]="Armas Melee Simples";
DND5E.weaponTypes["simpleR"]="Armas de Rango Simples";
DND5E.weaponTypes["heavyRan"]="Armas de Rango Pesadas";
DND5E.weaponTypes["heavyWea"]="Armas Largas";
DND5E.weaponTypes["guns"]="Pistolas";
DND5E.weaponTypes["martialM"]="Armas Melee Marciales";
DND5E.weaponTypes["explosiv"]="Explosivos";
DND5E.weaponTypes["energyPlas"]="Armas de energía y plasma";

//changing weapon, armor, and tool proficiencies
    //weapons
DND5E.weaponProficiencies["simM"]="Armas Melee Simples";
DND5E.weaponProficiencies["simR"]="Armas de Rango Simples";
DND5E.weaponProficiencies["hevR"]="Armas de Rango Pesadas";
DND5E.weaponProficiencies["hevW"]="Armas Largas";
DND5E.weaponProficiencies["farm"]="Pistolas";
DND5E.weaponProficiencies["marM"]="Armas Melee Marciales";
DND5E.weaponProficiencies["expl"]="Explosivos";
DND5E.weaponProficiencies["ener"]="Armas de energía y plasma";

    //armor
DND5E.armorProficiencies["algt"]="Armadura ligera";
DND5E.armorProficiencies["amed"]="Armadura media";
DND5E.armorProficiencies["apes"]="Armadura pesada"
DND5E.armorProficiencies["apow"]="Power Armor";

    //tools
DND5E.toolProficiencies["qkit"]="Kit de Química";
DND5E.toolProficiencies["ekit"]="Kit de Explosivos";
DND5E.toolProficiencies["hkit"]="Kit de Hacker";
DND5E.toolProficiencies["here"]="Herramientas de electromecánica";
DND5E.toolProficiencies["herf"]="Herramientas de farmacia";
DND5E.toolProficiencies["herc"]="Herramientas de cirujano";
DND5E.toolProficiencies["rkit"]="Kit de reparación";
DND5E.toolProficiencies["skit"]="Kit de Supervivencia";
DND5E.toolProficiencies["herl"]="Herramientas de ladrón";
DND5E.toolProficiencies["veht"]="Vehículos de tierra";
DND5E.toolProficiencies["veha"]="Vehículos de aire";