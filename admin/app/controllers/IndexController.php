<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {
    	$this->assets
    		->addCss('css/all.min.css');
    }

}

