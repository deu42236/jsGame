// Celá vesnice je vpiči, protože Teetova DoTka otrávila celou vesnici, soraka jde najít Teeta a zajebat ho, a dunutit ho, aby vydal lokace všech hoven, co vysázel kolem vesnice
//pokud se rozhodne jit healovat vesnicu, lidi ji nebudou věřit a jediné řešení bude hodit hvězdu na vesnici a zničit ji, tímto se spustí zemetřesení a Teetova skrýš se zřítí a Teeto utíká, po chvíli útěku ho zajebe Rengar
//end #1 teeto je minus a vesnice je čistá
//end #2 Soraka vyšlápla houbu
//end #3 Star wars

var native = window;
var originalConsole = native.console;
native.console = {
    log: function(message){
        $('ul.messages').append('<li>Log: ' + message + '</li>');
        originalConsole.log(message);
    },
    error: function(message){
        $('ul.messages').append('<li>Error: ' + message + '</li>');
        originalConsole.error(message);
    },
    warn: function(message){
        $('ul.messages').append('<li>Warn: ' + message + '</li>');
        originalConsole.warn(message);
    }
}




console.log("V pradávných časech, kdy byl čas sám ještě mladý, shlíželi nebeští bohové na smrtelníky Runeterry se vzrůstajícími obavami. Tito tvorové se chovali divoce, nepředvídatelně a nebezpečně se odchylovali od velkolepých osudů, které jim bohové předepsali. Hvězdné mapy se stávaly nesrozumitelnými a chaos hrozil pohltit svět.")
console.log("V této době se narodila Soraka, bytost, která byla zrozena z hvězd a zrozena z milosti. Soraka byla bytostí, která se narodila s neuvěřitelným darováním léčení a uzdravování. Její přítomnost sama o sobě byla zárukou míru a harmonie, a kdekoliv se objevila, zanechala za sebou stopu světla a lásky.")
console.log("Soraka se vydala na cestu, aby pomohla těm, kteří trpěli, a aby uzdravila zraněné. Její léčivé schopnosti byly tak silné, že byly schopny uzdravit i ty nejvážnější zranění a nemoci. Lidé, kteří se setkali s Sorakou, byli okouzleni její krásou a dobrotou, a brzy se stala legendou, která se šířila po celém světě.")
console.log("Soraka se stala známou jako Hvězdná Matka, a byla uctívána jako bohyně léčení a uzdravování. Její přítomnost byla zárukou míru a harmonie, a lidé se modlili k ní, aby jim pomohla v jejich největších potřebách. Soraka se stala symbolem naděje a lásky, a její jméno bylo známé po celém světě.")

console.log("Jsi na cestě do vesnice, kde se šíří zprávy o nemoci, která postihla obyvatele. Jak budeš pokračovat?")
console.log("1. Půjdeš do vesnice a pokusíš se najít zdroj nemoci.")
console.log("2. Půjdeš do vesnice a pokusíš se uzdravit nemocné.")
let decision = prompt("Zadej číslo odpovědi:")
if (decision == 2) {
    // uzdravit nemocné, vyšlapání houby - ende #2
    console.log("Rozhodl ses jít do vesnice a pokusit se uzdravit nemocné.")
    console.log("Aha, už asi víme kde je problém! Soraka vyšlápla houbu a zjistila, že je to Teetova houba, která způsobuje nemoc.")
    console.log("Soraka umírá na raka.")
    console.log("The end #2")
}else if (decision == 1) {
    //zdroj nemoci
    console.log("Rozhodl ses jít do vesnice a pokusit se najít zdroj nemoci.")
    console.log("Po dlouhé cestě dorazíš do vesnice, kde se setkáš s místními obyvateli, kteří ti vypráví o záhadné nemoci, která postihla jejich vesnici. Obyvatelé jsou zoufalí a prosí tě, abys jim pomohl najít zdroj nemoci a uzdravil nemocné.")
    console.log("Zdá se, že zdroj nemoci je v temném lese, který se nachází za vesnicí. Jak budeš pokračovat?")
    console.log("1. Půjdeš do temného lesa a pokusíš se najít zdroj nemoci.")
    console.log("2. Rozhodneš se vrátit do vesnice a pokusit se uzdravit nemocné.")
    let decision1 = prompt("Zadej číslo odpovědi:")

    if (decision1 == 2) {
        // uzdravit nemocné, vyšlapání houby - ende #2
        console.log("Rozhodl ses jít do vesnice a pokusit se uzdravit nemocné.")
        console.log("Aha, už asi víme kde je problém! Soraka vyšlápla houbu a zjistila, že je to Teetova houba, která způsobuje nemoc.")
        console.log("Soraka umírá na raka.")
        console.log("The end #2")
    }else if (decision1 == 1) {
        //hledat v lese
        console.log("Kvůli této cestě si se rozhodl, že bude dobrý nápad si koupi BF Sword.")
        console.log("Rozhodl ses tedy jít do temného lesa a pokusit se najít zdroj nemoci.")
        console.log("Po dlouhé cestě dorazíš do temného lesa, kde se setkáš s nebezpečnými stvořeními a záhadnými bytostmi. Les je plný nebezpečí a tajemství, a musíš být opatrný, abys přežil.")
        console.log("Zdá se, že zdroj nemoci je v temné jeskyni, která se nachází hluboko v lese. Jak budeš pokračovat?")
        console.log("1. Půjdeš do temné jeskyně a pokusíš se najít zdroj nemoci.")
        console.log("2. Rozhodneš se vrátit zpět do vesnice a pokusit se uzdravit nemocné.")

        let decision2 = prompt("Zadej číslo odpovědi:")
        if (decision2 == 2) {
            // uzdravit nemocné, star wars
            console.log("Rozhodl ses jít do vesnice a pokusit se uzdravit nemocné.")
            console.log("Soraka se vrací do vesnice se zjištěním o zdroji nemoci.")
            console.log("Soraka se rozhodne uzdravit nemocné a vrátit vesnici zpět k životu.")
            console.log("Sorace ale vesničané nevěří a považují ji za zrádkyni.")
            console.log("Soraka se rozhodne použít svou hvězdu, aby ukázala vesnici pravdu.")
            console.log("Soraka hodí hvězdu na vesnici a zničí ji, což spustí zemětřesení a zničí vesnici.")
            console.log("O této skutečnosti se dozví ASol a soraku zbaví jejích moci.")
            console.log("O tom se dozví ale i Viego... Pokračování zde: https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            //rickroll by copilot
            console.log("Opravdovu volné pokračování zde: https://github.com/jur42282/jsGame")
            //end #3 - star wars

        }else if (decision2 == 1) {
            //temná jeskyně
            console.log("Rozhodl ses jít do temné jeskyně a pokusit se najít zdroj nemoci.")
            console.log("Po dlouhé cestě dorazíš do temné jeskyně, kde se setkáš s nebezpečnými stvořeními a záhadnými bytostmi. Jeskyně je plná nebezpečí a tajemství, a musíš být opatrný, abys přežil.")
            console.log("Nakonec se ti podaří najít zdroj nemoci, který je způsoben temným kouzlem, které bylo vyvoláno mocným Teetem. Musíš porazit temného čaroděje a zničit jeho kouzlo, aby se vesnice mohla uzdravit.")
            console.log("Teeto si ale všimne přítomnosti a hodí po sorace oslepující šipku, která soraku oslepí a způsobí jí ztrátu přesnosti v házení banánů.")
            console.log("Soraka se rozhodne, že je čas se pomstít a začne házet banány po Teetovi.")
            console.log("Soraka ale moc nevidí, a tak se jí nedaří trefit Teeta.")
            console.log("Teeto se směje a začne házet po sorace houby.")
            console.log("Soraka ale jako správný Support má Oracle Lens a tak vidí houby a všechny je dodgne.")
            console.log("Soraka se mu vysměje a říká: 'Kde máš cooldowny, debile?'")
            console.log("Teeto se rozzlobí a začne házet po Sorace další houbu. Jak budeš pokračovat?")
            console.log("1. Soraka se rozhodne házet banány po Teetovi.")
            console.log("2. Soraka se rozhodne mu zničit houby, dokud je vidí.")
            let decision3 = prompt("Zadej číslo odpovědi:")
            if (decision3 == 1) {
                //házení banánů, KONEC - TEETO JE MINUS
                console.log("Soraka se rozhodne házet banány po Teetovi.")
                console.log("Soraka se snaží trefit Teeta banány, protože už vídí(DoTka skončila)")
                console.log("Teeto se snaží uniknout, ale Soraka je příliš rychlá a trefí ho banánem.")
                console.log("Teeto je zasažen banánem a upadá na zem.")
                console.log("Soraka se k němu přiblíží a říká: 'Teeto, jsi fakt debil, co si myslel, že uděláš?'")
                console.log("Teeto se snaží odpovědět, ale je příliš oslabený a nemůže mluvit.")
                console.log("Soraka se rozhodne ho uzdravit a vrátit mu sílu.")
                console.log("Teeto se probudí a říká: 'Promiň, Sorako, chtěl jsem jenom pomoci.'")
                console.log("Soraka ho chce obejmout, ale Teeto jí flusne další šipku a uteče.")
                console.log("Teeto utíká s minimem HP ale z keře se objeví Rengar a zajebe ho.")
                console.log("Soraka se rozhodne vrátit do vesnice, kterou vyčistí od křečkových hoven a celou vesnici vyhealuje.")
                console.log("The end #1")
            } else if (decision3 == 2) {
                console.log("Soraka se rozhodne mu zničit houby, dokud je vidí.")
                console.log("Soraka se snaží zničit houby, které Teeto hází, ale je jich příliš mnoho.")
                console.log("Teeto se směje a hází po Sorace další houby.")
                console.log("Soraka se snaží je všechny dodgne, ale je příliš pomalá.")
                console.log("Teeto se rozzlobí a začne házet po Sorace další houbu, tentokrát přímo na hlavu.")
                console.log("Soraka je zasažena houbou a upadá na zem.")
                console.log("Teeto se směje a začne se jí vysmívat.")
                console.log("Soraka se snaží vstát, ale je příliš oslabená a nemůže se bránit.")
                console.log("Z keře se naštěstí zjeví Rengar, který běží tak rychle, že Teeto nestihne zareagovat.")
                console.log("Rengar zajebe Teeta a s kořistí mizí tak rychle, že Soraka ani neví kam.")
                console.log("Soraka se rozhodne vrátit do vesnice, kterou vyčistí od křečkových hoven a celou vesnici vyhealuje.")
                console.log("The end #1")
            }
        }
    }
}