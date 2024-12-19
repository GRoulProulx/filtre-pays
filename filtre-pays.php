<?php
/*
Plugin Name: Filtre Pays
Description: Permet de filtrer les destinations par pays via l'API REST de WordPress.
Version: 1.0
Author: Guillaume Proulx Rouleau
*/

function charger_scripts_css(){
 
    $version_css = filemtime(plugin_dir_path(__FILE__). "/style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "js/filtre-pays.js");
 
    wp_enqueue_style(
        "filtrePost",        
        plugin_dir_url(__FILE__) . "/style.css",
        [],
        $version_css
    ) ;  
 
    wp_enqueue_script(
        "filtrePost",      
        plugin_dir_url(__FILE__) . "/js/filtre-pays.js",
        [],
        $version_js,
        true
    )  ;
}
add_action("wp_enqueue_scripts", "charger_scripts_css");

function genere_boutons() {
    $pays = array("France", "États-Unis", "Canada", "Argentine", "Chili", "Belgique", 
                 "Maroc", "Mexique", "Japon", "Italie", "Islande", "Chine", "Grèce", "Suisse");
    $content = "";
    foreach ($pays as $index => $nom) {
        $content .= "<button data-id='" . ($index + 1) . "'>$nom</button>";
    }
    return '<div class="filtre__bouton">' . $content . '</div>
            <div class="contenu__restapi"></div>';
}



add_shortcode("extraire_categorie", "genere_boutons");