function accordiontext_pluginAppObj_56_81() {
    
     var accordionContainer = "";
     var singolSlider = "";
     var heightFinal = 0;
     var widthFinal = 0;
     var widthSingolSlide = 0;
     var t_animation = "";
     var containerTitles = [];
     var containerDescriptions = [];
     var totBoxes = 0;
     var numStyle = 1;
     var descStyle = "";
     var svgOpened = "";
     var svgClosed = "";
     var svgArrow = "";
     var fontSizeTitle = 0;
     var boxOpenedOnLoad = "";
    
    x5engine.boot.push(function(){
        
    init();   
});

    function getNumStyle(nstyle){
        return (nstyle.match(/I/g)||[]).length;
    }

    function init(){
        initProperty();
        for(i=0; i < 15; i++){
            if(containerTitles[i] != undefined && containerTitles[i] != "" && containerDescriptions[i] != undefined && containerDescriptions[i] != ""){
                initBox(libBase.br(containerTitles[i]), containerDescriptions[i], totBoxes, i);  
                totBoxes += 1;
            }
        }
        setHeightDesc();
        initStyle();
        initEvent();   
    }

    function initProperty(){
        accordionContainer = $('#pluginAppObj_56_81_accordion_container');
        numStyle = getNumStyle("styleIIII");
        descStyle = "styleIIII";
        t_animation = 400;
        fontSizeTitle = 18.62;
        boxOpenedOnLoad = 0;

        svgOpened = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(255, 255, 43, 1)")+'" id="Group" transform="translate(-48.000000, -528.000000)"><path d="M56,544 C51.5817218,544 48,540.418278 48,536 C48,531.581722 51.5817218,528 56,528 C60.4182782,528 64,531.581722 64,536 C64,540.418278 60.4182782,544 56,544 Z M52,535 L52,537 L60,537 L60,535 Z M52,535" id="Oval 210 copy 2"/></g></g></svg>';
        
        svgClosed = '<?xml version="1.0" ?><svg height="'+fontSizeTitle+'px" version="1.1" viewBox="0 0 16 16" width="'+fontSizeTitle+'px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs/><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g fill="'+x5engine.utils.rgb2hex("rgba(64, 128, 0, 1)")+'" id="Group" transform="translate(0.000000, -528.000000)"><path d="M4,535 L4,537 L7,537 L7,540 L9,540 L9,537 L12,537 L12,535 L9,535 L9,532 L7,532 L7,535 Z M8,544 C3.58172178,544 0,540.418278 0,536 C0,531.581722 3.58172178,528 8,528 C12.4182782,528 16,531.581722 16,536 C16,540.418278 12.4182782,544 8,544 Z M8,544" id="Oval 210 copy"/></g></g></svg>';
        
        svgArrow = '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>';
        
        containerTitles = [" Einladung zur Talentschmiede 2019", "Warum sollst Du dabei sein ? ", "Was wird geboten ?", "Kosten und Bedingungen !", "Förderer und Organisation", "", "", "", "", "", "", "", "", "", ""];
        
        containerDescriptions = ["Fortbildung des Landesverbands der &lt;br /&gt;Köche in Baden-Württemberg&lt;br /&gt;vom 15.bis 17.November 2019 an der&lt;br /&gt;Landesberufsschule in Villingen-Schwenningen", "Ich will besser sein als der Durchschnitt!&lt;br /&gt;Ich will mehr für meine Ausbildung tun!&lt;br /&gt;Ich will zu denen gehören, die mehr erreichen wollen!&lt;br /&gt;Ich lerne Gleichgesinnte kennen!&lt;br /&gt;    Ich kann hier beginnen ein eigenes Netzwerk aufzubauen!&lt;br /&gt;Ich bekomme Antworten auf meine Fragen!", "Bekannte Referenten unterrichten&lt;br /&gt;in den Küchen der Landes-Berufsschule!&lt;br /&gt;Hier lerne ich nicht alltägliche Techniken und bekomme&lt;br /&gt;wichtige Informationen für meine Arbeit.&lt;br /&gt;Anmeldungen nur über den für Deinen Betrieb zuständigen&lt;br /&gt;Zweigverein des Verbandes der Köche Deutschlands&lt;br /&gt;- siehe auch auf der Web-Seite des&lt;br /&gt;Landesverbandes  &quot;Köche-BW.de&quot;  unter Zweigvereine.&lt;br /&gt;Auf der Web-Seite sehen Sie auch Berichte&lt;br /&gt;von Talentschmiede-Veranstaltungen.", "Der Auszubildende oder sein Ausbilder trägt die Kosten&lt;br /&gt;für die Reise. Für 2 Tage Verpflegung und Übernachtung&lt;br /&gt;berechnen wir einen Selbstkosten-Anteil von 50,00 €.  &lt;br /&gt;&lt;br /&gt;Die Teilnahme an der Talentschmiede&lt;br /&gt;(Wert ca. 400,00 Euro)&lt;br /&gt;einschließlich aller Referenten und Lebensmittel,&lt;br /&gt;sind für den Teilnehmer kostenfrei.&lt;br /&gt;Die Kosten werden von Firmen, die sich&lt;br /&gt;Ausbildungsförderung als Ziel gesetzt haben und&lt;br /&gt;dem Landesverband der Köche Baden-Württemberg&lt;br /&gt;übernommen.&lt;br /&gt;&lt;br /&gt;Aus versicherungstechnischen Gründen muss&lt;br /&gt;der/die Teilnehmer/-in&lt;br /&gt;Mitglied des Verbandes der Köche sein.&lt;br /&gt;Als Mitglied ist die Teilnahme und Fahrt versichert.", "Förderer der Talentschmiede:&lt;br /&gt;&quot;Alles Klar&quot;, Bürger, Metzgerei Buchmann,&lt;br /&gt;Edeka Union SB Großmarkt, Franz-Großküchentechnik,&lt;br /&gt;Gourmet - Competence, Hiestand, Jeremias-Nudeln,&lt;br /&gt;Meiko, MEGA, Rieber, TransGourmet, ProHoga.&lt;br /&gt;Danke auch an Familie Lohrer,&lt;br /&gt;Direktoren der Landesberufsschule und Internat&lt;br /&gt;in Villingen-Schwenningen.&lt;br /&gt;&lt;br /&gt;Organisation Michael Viehmann, Jugendleiter des&lt;br /&gt;Landesverbandes Baden-Württemberg.&lt;br /&gt;Vorstand Kochverein Stuttgart 1890 e.V. ", "", "", "", "", "", "", "", "", "", ""];
    }

    function initBox(title, description, pos, i){  
        
        $(accordionContainer).addClass(descStyle);
        var clEl = "accordion_el";
        var clDesc = "collapse";
        if(i == boxOpenedOnLoad){
            clEl += " selected";
            clDesc += " in";
        }
        var html = "";
        html += "<div class='"+clEl+"' data-position='"+pos+"'>";    
        
            html += "<div class='accordion_title'>";
         
            if (numStyle == 1){
                html += "<div class='accordion_title_text'>";
                    html += title;
                html += "</div>"; //close accordion_title_text       
            }
            else if (numStyle == 2){
                html += "<div class='accordion_title_text'>";
                    html += title;
                html += "</div>"; //close accordion_title_text
                
                html += "<div class='accordion_title_icon'>";
                    html += "<div class='ic'></div>";   
                html += "</div>"; //close accordion_title_icon             
            }
            else if(numStyle == 5 || numStyle == 6){ //without icon
               html += title;
            }
            else{ //with arrow icon
                html += "<div class='accordion_title_text'>";
                    html += title; 
                html += "</div>"; //close accordion_title_text

                if(pos == boxOpenedOnLoad){
                    html += "<div class='accordion_title_icon' style='visibility:hidden'>"; //I do not show the rotate initially   
                }
                else{
                    html += "<div class='accordion_title_icon'>";
                }
                
                html += svgArrow;
                html += "</div>"; //close accordion_title_icon
            }
        
            html += "</div>"; //close accordion_title
    
            html += "<div class='accordion_desc " +clDesc+ "'>";
                html += libBase.br(description);  
            html += "</div>"; //close accordion_description
        
        html += "</div>"; //close accordion_el
        $(accordionContainer).append(html);   
    }

    function setHeightDesc(){
         
        if(false){
           
            var availableSpace = ($("#pluginAppObj_56_81_accordion_container .accordion_el").outerHeight(true) * totBoxes);
            if(numStyle != 4){
                //remove distance from element
                availableSpace -= 10;
            }
            availableSpace = 250 - availableSpace;
            availableSpace = availableSpace < 40 ? 40 : availableSpace;

            //set height to first description box
            $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_desc.collapse').css("height", availableSpace);
        }
        //set height to first description box
        $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_desc.collapse.in').css("display", "block");
    }

    function initStyle(){
        //add class to first box
        $('#pluginAppObj_56_81_accordion_container').find("[data-position='" + boxOpenedOnLoad + "']").addClass("openedchild");
        
        var childAccordionContainer = document.getElementById("pluginAppObj_56_81_accordion_container").querySelectorAll('[data-position]');
        for (var i=0; i < childAccordionContainer.length; i++) {
            if(childAccordionContainer[i].dataset.position == totBoxes-1){
                //add class to last box because i need to set margin-bottom 0
                $(childAccordionContainer[i]).addClass("lastchild");
            }
        }
        
        if(numStyle == 2){
            $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').append(svgClosed);   
            $('#pluginAppObj_56_81_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon .ic').empty().append(svgOpened);
        }
        else if(numStyle == 3 || numStyle == 4){
            $('#pluginAppObj_56_81_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').addClass("opened");
            setTimeout(function(){ 
                $('#pluginAppObj_56_81_accordion_container .accordion_el.openedchild .accordion_title .accordion_title_icon').css("visibility", "visible");
            }, 75);   
        }
    }

    function initEvent(){   
        $('#pluginAppObj_56_81_accordion_container .accordion_el').click(function (e) { 
            var desc = $(this).find(".accordion_desc");
            var itemClickedIsClosed = !$(desc).hasClass("in");

            $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_desc.collapse').slideUp(t_animation);
            $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_desc.collapse').removeClass("in");

            if(itemClickedIsClosed){
                $(desc).slideDown(t_animation);
                $(desc).addClass("in");
            }

            $('#pluginAppObj_56_81_accordion_container .accordion_el').removeClass("selected");

            if(itemClickedIsClosed){
                $(this).addClass("selected");
            }

            //style with icon
            if(numStyle == 2 || numStyle == 3 || numStyle == 4){
                $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_title .accordion_title_icon').removeClass("opened"); 

                if(itemClickedIsClosed){
                    $(this).find("div.accordion_title_icon").addClass("opened");
                }

                if(numStyle == 2){    
                    $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_title .accordion_title_icon .ic').empty().append(svgClosed);

                    if(itemClickedIsClosed){
                        $('#pluginAppObj_56_81_accordion_container .accordion_el .accordion_title .accordion_title_icon.opened .ic').empty().append(svgOpened);
                    }
                }
            }
        });
    }
}