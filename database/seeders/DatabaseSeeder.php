<?php

namespace Database\Seeders;

use App\Models\Espai;
use App\Models\Illa;
use App\Models\Modalitat;
use App\Models\Municipi;
use App\Models\Obra;
use App\Models\Servei;
use App\Models\Tipu;
use App\Models\Usuari;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $municipis = json_decode(Storage::disk('local')->get('municipis.json'), true);
        $municipis = $municipis['municipis']['municipi'];

        foreach ($municipis as $municipi) {
            if (empty(Municipi::where('nom', '=', $municipi['Nom'])->first())) {

                $illa = Illa::where('nom', '=', $municipi['Illa'])->first();

                if (empty($illa))
                    $illa = Illa::create([
                        'nom' => $municipi['Illa']
                    ]);

                Municipi::create([
                    'illa_id' => $illa->id,
                    'nom' => $municipi['Nom'],
                ]);
            }
        }

        $tipus = json_decode(Storage::disk('local')->get('tipus.json'), true);
        $tipus = $tipus['tipusespais']['tipus'];

        foreach ($tipus as $tipu) {
            if (empty(Tipu::where('cat', '=', $tipu['cat'])->first())) {

                unset($tipu['id']);

                Tipu::create($tipu);
            }
        }

        $serveis = json_decode(Storage::disk('local')->get('serveis.json'), true);
        $serveis = $serveis['serveis']['servei'];

        foreach ($serveis as $servei) {
            if (empty(Servei::where('cat', '=', $servei['cat'])->first())) {

                unset($servei['id']);

                Servei::create($servei);
            }
        }

        $modalitats = json_decode(Storage::disk('local')->get('modalitats.json'), true);
        $modalitats = $modalitats['modalitats']['modalitat'];

        foreach ($modalitats as $modalitat) {
            if (empty(Modalitat::where('cat', '=', $modalitat['cat'])->first())) {

                unset($modalitat['id']);

                Modalitat::create($modalitat);
            }
        }

        $modalitats = json_decode(Storage::disk('local')->get('modalitats.json'), true);
        $modalitats = $modalitats['modalitats']['modalitat'];

        foreach ($modalitats as $modalitat) {
            if (empty(Modalitat::where('cat', '=', $modalitat['cat'])->first())) {

                unset($modalitat['id']);

                Modalitat::create($modalitat);
            }
        }

        $obres = json_decode(Storage::disk('local')->get('obres.json'), true);
        $obres = $obres['obres']['obra'];

        foreach ($obres as $obra) {
            if (empty(Obra::where('registre', '=', $obra['registre'])->first())) {

                Obra::create($obra);
            }
        }

        $usuaris = json_decode(Storage::disk('local')->get('usuaris.json'), true);
        $usuaris = $usuaris['usuaris']['usuari'];

        foreach ($usuaris as $usuari) {
            if (empty(Usuari::where('email', '=', $usuari['email'])->first())) {

                $usuari['contrasenya'] = Hash::make($usuari['password']);

                unset($usuari['password']);

                Usuari::create($usuari);
            }
        }

        $espais = json_decode(Storage::disk('local')->get('espais.json'), true);
        $espais = $espais['espais']['espai'];

        foreach ($espais as $espai) {
            if (empty(Espai::where('registre', '=', $espai['registre'])->first())) {

                $espai['desc_cat'] = $espai['descripcions']['cat'];
                $espai['desc_esp'] = $espai['descripcions']['esp'];
                $espai['desc_eng'] = $espai['descripcions']['eng'];

                // $gestor = Usuari::where('email', '=', $espai['gestor'])->first();

                // if (empty($gestor)) {
                //     die($espai['gestor']);
                // }

                $gestors = Usuari::whereNotNull('dni')->get();

                $gestor = $gestors[rand(0, count($gestors) - 1)];

                $espai['gestor_id'] = $gestor->id;

                $municipi = Municipi::where('nom', '=', $espai['municipi'])->first();

                if (empty($municipi))
                    $municipi = Municipi::first();

                $espai['municipi_id'] = $municipi->id;

                $tipus = Tipu::where('cat', '=', $espai['tipus'])->first();

                if (empty($tipus))
                    die('no tipus');

                $espai['tipu_id'] = $tipus->id;


                $modalitats = explode(',', $espai['modalitats']);

                if (!is_array($espai['serveis'])) {
                    $serveis = explode(',', $espai['serveis']);
                } else {
                    $serveis = [];
                }

                unset(
                    $espai['descripcions'],
                    $espai['modalitats'],
                    $espai['serveis'],
                    $espai['municipi'],
                    $espai['tipus'],
                    $espai['gestor'],
                );

                $espaiModel = Espai::create($espai);

                foreach ($modalitats as $modalitatNom) {
                    $modalitatNom = trim($modalitatNom);

                    $modalitat = Modalitat::where('cat', '=', $modalitatNom)->first();

                    // if (empty($modalitat))
                    //     die('no modalitat');

                    $espaiModel->modalitats->add($modalitat);
                }

                foreach ($serveis as $serveiNom) {
                    $serveiNom = trim($serveiNom);

                    $servei = Servei::where('cat', '=', $serveiNom)->first();

                    // if (empty($servei))
                    //     die('no servei');

                    $espaiModel->serveis->add($servei);
                }
            }
        }
    }
}
