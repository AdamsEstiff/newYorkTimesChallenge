<?php

namespace App\Console\Commands;

use App\Models\Notice;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Http;
class newsTask extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'new:task';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Actualiza cada minuto la base de datos con la api de New York Times';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //esta fue la parte que mas me costo
        //la api me parecio ENORME y muchas dimensiones, pero al final lo logre :D
        //aca traigo la api
        $response = Http::get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=JBArrZG9G3ZZfeMou7zvF7ViGsGIucU2');
        //le doy formato json para que este mas legible
        $response->json();
        //comienzo a seleccionar un elemento del arreglo y se lo meto a otro
        $news=$response['results'];
        //comienzo a embarcarme mas dentro del arreglo que trajo la api
        foreach ($news as $object){
            //selecciono una parte llamada media, para poder ingresar a las fotos de la api
            $media=$object['media'];
            //aca me aseguro de que no guarde una y otra vez los mismos datos
            $unsave= Notice::where('id_news',$object['id'])->first();
            if(empty($unsave)){
                //si los datos no son repetidos procede a guardar
                $save=new Notice();
                $save->id_news=$object['id'];
                $save->title=$object['title'];
                $save->abstract=$object['abstract'];
                $save->url=$object['url'];
                foreach ($media as $obj){
                    $save->caption=$obj['caption'];
                    $meta=$obj['media-metadata'][2];
                    Log::debug($meta['url']);
                    $save->image=$meta['url'];

                }
                $save->save();
            }

        }
    }
}
