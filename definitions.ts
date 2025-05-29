const bluebellColour = "#1BE7FF";

Blockly.Blocks['import_bluebell'] = {
    init: function () {
        this.appendDummyInput().appendField("from bluebell import *");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(bluebellColour);
        this.setTooltip("Imports bluebell library.");
    }
};

Blockly.Blocks['aspirate'] = {
    init: function () {
        this.appendDummyInput().appendField("Aspiration volume");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(bluebellColour);
        this.setTooltip("Aspirates a set volume");
    }
};

Blockly.Blocks['dispense'] = {
    init: function () {
        this.appendDummyInput().appendField("Dispense volume");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(bluebellColour);
        this.setTooltip("Dispenses a set volume");
    }
};

Blockly.Blocks['distribute_liquid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Distribute ");
        this.appendValueInput("volume");
        this.appendDummyInput()
            .appendField("uL of liquid from ");
        this.appendValueInput("source");
        this.appendDummyInput()
            .appendField(" to ");
        this.appendValueInput("destination");
        this.appendDummyInput()
            .appendField(" with liquid class ");
        this.appendValueInput("liquid class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInput(true);
        this.setColour(bluebellColour);
        this.setTooltip("Distributes a set volume");
    }
}