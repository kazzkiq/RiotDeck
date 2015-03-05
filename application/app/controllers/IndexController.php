<?php

class IndexController extends ControllerBase
{

    public function indexAction()
    {
    	$component = Components::findFirst(array(
    			array('likes' => 0)
    		));
    	$component->dateAdd = date("d\/m\/Y", explode(" ",$component->dateAdd)[1]);
    	$this->view->setVar("component",$component);
    }

}

