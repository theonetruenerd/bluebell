Blockly.Blocks['import_bluebell'] = {
    init: function () {
        this.appendDummyInput().appendField("from bluebell import *");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#a2a2d0");
        this.setTooltip("Imports bluebell library.");
        this.setHelpUri("");
    }
};