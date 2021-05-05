<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Modules\Snippman\PullGists\PullGistsHandler;

class PullGists extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'PullGists:check';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Pull gists from API';

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
     * @return mixed
     */
    public function handle()
    {
      $pull = new PullGistsHandler;
      $response = $pull();  
      \Log::channel('cronjob')->info('CRON JOB: PullGists::handle()');
    }
}
