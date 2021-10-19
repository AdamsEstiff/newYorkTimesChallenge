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
        $response = Http::get('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=JBArrZG9G3ZZfeMou7zvF7ViGsGIucU2');
        $response->json();
        $news=$response['results'];
        $count=0;
//        Log::debug($response);
        foreach ($news as $object){
            $media=$object['media'];
            $unsave= Notice::where('id_news',$object['id'])->first();
            if(empty($unsave)){
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
