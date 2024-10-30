import React from 'react';
import { 
  VscTerminalCmd,
  VscMail,
  VscPulse,
  VscRuby,
  VscAdd,
  VscSettingsGear,
  VscTrash 
} from 'react-icons/vsc';

function Sidebar() {
  return (
    <div className="w-64 bg-[#141414] flex flex-col border-r border-[#2a2a2a]">
      {/* Header */}
      <div className="p-4 border-b border-[#2a2a2a]">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <VscRuby className="text-[#ff2d70]" />
          Ruby OS
        </h1>
      </div>

      {/* Preset Scripts */}
      <div className="flex-1 py-2">
        <div className="space-y-1">
          {[
            { name: 'Mail', icon: <VscMail />, command: 'thunderbird' },
            { name: 'Terminal', icon: <VscTerminalCmd />, command: 'mate-terminal' },
            { name: 'System Monitor', icon: <VscPulse />, command: 'gnome-system-monitor' },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => window.terminal?.openWithCommand(item.command)}
              className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#202020] transition-colors text-gray-300 hover:text-white"
            >
              <span className="text-[#ff2d70]">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="p-2 border-t border-[#2a2a2a] space-y-2">
        <div className="flex items-center gap-2 px-2 py-1.5 bg-[#1a1a1a] rounded">
          <VscRuby className="text-[#ff2d70]" />
          <input
            type="text"
            placeholder="Ask Ruby..."
            className="bg-transparent w-full text-sm focus:outline-none text-gray-300"
          />
        </div>
        <div className="flex justify-between px-2">
          <button className="p-1 hover:bg-[#202020] rounded">
            <VscAdd className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-[#202020] rounded">
            <VscSettingsGear className="text-gray-400" />
          </button>
          <button className="p-1 hover:bg-[#202020] rounded">
            <VscTrash className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;