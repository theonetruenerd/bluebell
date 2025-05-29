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
            .appendField("Distribute ")
            .appendField(new Blockly.FieldVariable("volume"), "volume")
            .appendField("uL of liquid from ")
            .appendField(new Blockly.FieldVariable("source"), "source")
            .appendField(" to ")
            .appendField(new Blockly.FieldVariable("destination"), "destination")
            .appendField(" with liquid class ")
            .appendField(new Blockly.FieldVariable("liquid_class"), "liquid class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(bluebellColour);
        this.setTooltip("Distributes a set volume");
    }
}