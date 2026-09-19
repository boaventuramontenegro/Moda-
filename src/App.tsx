/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full text-center space-y-6 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-8 rounded-2xl shadow-xl">
        <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center mx-auto text-2xl font-bold">
          ⚡
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Olá! O que vamos construir hoje?
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Me conte o que você gostaria de criar — um aplicativo de tarefas, dashboard, ferramenta com IA, jogo ou qualquer outra ideia.
          </p>
        </div>
      </div>
    </div>
  );
}
