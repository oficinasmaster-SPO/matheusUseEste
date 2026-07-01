export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OM</span>
            </div>
            <span className="font-semibold text-white tracking-tight">
              Oficinas Master
            </span>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Oficinas Master. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400 transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-gray-400 transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
