import { DND5E } from '/systems/dnd5e/module/config.js';
import ActorSheet5eCharacter from "/systems/dnd5e/module/actor/sheets/character.js";
//import Actor5e from "/systems/dnd5e/module/actor/entity.js";
import  ActorSheet5eNPC from "/systems/dnd5e/module/actor/sheets/npc.js";
import  ItemSheet5e from "/systems/dnd5e/module/item/sheet.js";

//Changing out deprecated 5e skills to the replacement
DND5E.skills["arc"] = "Science";
DND5E.skills["his"] = "Pre-War Knowledge";

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
    //removing other options
DND5E.languages["elvish"]= "";
DND5E.languages["giant"]= "";
DND5E.languages["gith"]= "";
DND5E.languages["gnomish"]= "";
DND5E.languages["goblin"]= "";
DND5E.languages["gnoll"]= "";
DND5E.languages["halfling"]= "";
DND5E.languages["ignan"]= "";
DND5E.languages["infernal"]= "";
DND5E.languages["orc"]= "";
DND5E.languages["primordial"]= "";
DND5E.languages["sylvan"]= "";
DND5E.languages["terran"]= "";
DND5E.languages["cant"]= "";
DND5E.languages["undercommon"]= "";

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
DND5E.weaponProficiencies["sim"]="Armas Melee Simples";
DND5E.weaponProficiencies["simR"]="Armas de Rango Simples";
DND5E.weaponProficiencies["hevR"]="Armas de Rango Pesadas";
DND5E.weaponProficiencies["hevW"]="Armas Largas";
DND5E.weaponProficiencies["farm"]="Pistolas";
DND5E.weaponProficiencies["mar"]="Armas Melee Marciales";
DND5E.weaponProficiencies["expl"]="Explosivos";
DND5E.weaponProficiencies["ener"]="Armas de energía y plasma";

    //armor
DND5E.armorProficiencies["lgt"]="Armadura ligera";
DND5E.armorProficiencies["med"]="Armadura media";
DND5E.armorProficiencies["hvy"]="Armadura pesada"
DND5E.armorProficiencies["shl"]="Power Armor";

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

//Fallout sheet registration
    //character sheet
class FalloutCharacterSheet extends ActorSheet5eCharacter {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~FALLOUT CHARACTER SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('fallout5e');
	  return options;
	}
  }
Actors.registerSheet("dnd5e", FalloutCharacterSheet, { 
    types: ["character"],
    makeDefault: true 
});
    //NPC sheet
class FalloutNPCSheet extends ActorSheet5eNPC {
	static get defaultOptions() {
	  console.log("~~~~~~~~~~~FALLOUT NPC SHEET ACTIVE~~~~~~~~~~~");
	  const options = super.defaultOptions;
	  options.classes.push('fallout5e');
	  return options;
	}
  }
Actors.registerSheet("dnd5e", FalloutNPCSheet, { 
    types: ["npc"],
    makeDefault: true 
});
    //item sheet
class FalloutItemSheet extends ItemSheet5e {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes.push('fallout5e');
        return options;
    }
}

Items.registerSheet("dnd5e", FalloutItemSheet, { 
    types: ["spell","weapon","equipment","loot","tool","backpack","consumable","class","feat"],
    makeDefault: true 
});


//Adding a place for radiation tracking
Hooks.on("renderActorSheet", (app, html, data) => {
	const counters = html.find("div.counters");
	const flags = data.actor.flags.fallout5e || {};
	counters.append(`
	<div class="counter flexrow radiation">
    <h4>Radiation</h4>
    <div class="counter-value">
      <input type="text" size="5" name="flags.fallout5e.radiation" placeholder="0" value="${flags.radiation ?? 0}" data-dtype="Number"/>
    </div>
	</div>
	`);
});
