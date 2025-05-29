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
    const volume = Blockly.Python.valueToCode(block, 'volume', 0);
    const source = Blockly.Python.valueToCode(block, 'source', 0);
    const code = `print(\'Distributing ${volume}uL from ${source}\')\n`
    return code
};