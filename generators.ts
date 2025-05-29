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
    const parameters = Blockly.Python.valueToCode(block, 'parameters', 3);
    const code = `print(\'${parameters}\')\n`
    return code
};