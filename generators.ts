Blockly.Python['import_bluebell'] = function (block) {
    const code = 'from bluebell import *\n';
    return code
};

Blockly.Python['aspirate'] = function (block) {
    const code = 'print(\"Aspirating\")\n';
    return code
};

Blockly.Python['dispense'] = function (block) {
    const code = 'print(\"Dispensing\")\n';
    return code
};

Blockly.Python['distribute_liquid'] = function (block) {
    const volume = Blockly.Python.nameDB_.getName(block.getFieldValue('volume'), Blockly.VARIABLE_CATEGORY_NAME);
    const source = Blockly.Python.nameDB_.getName(block.getFieldValue('source'), Blockly.VARIABLE_CATEGORY_NAME);
    const destination = Blockly.Python.nameDB_.getName(block.getFieldValue('destination'), Blockly.VARIABLE_CATEGORY_NAME);
    const liquid_class = Blockly.Python.nameDB_.getName(block.getFieldValue('liquid_class'), Blockly.VARIABLE_CATEGORY_NAME);
    const code = `print(\'Distributing ${volume}uL from ${source} to ${destination} using liquid class ${liquid_class}\')\n`
    return code
};