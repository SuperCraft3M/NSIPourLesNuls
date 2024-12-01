export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-white/80">
                            © {currentYear} La NSI pour les nuls expliqué par un nul. Créé par Mathis Jacques--LLorens.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* <a
                            href="#"
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            Mentions légales
                        </a>
                        <a
                            href="#"
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            Politique de confidentialité
                        </a>
                        <a
                            href="#"
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            Contact
                        </a>*/}
                    </div>
                </div>
            </div>
        </footer>
    );
}