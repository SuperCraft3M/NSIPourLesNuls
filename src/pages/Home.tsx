import { Code2, Database, Lightbulb, Rocket, Brain, Trophy } from 'lucide-react';
import { CategoryCard } from '../components/home/CategoryCard';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl -z-10" />
        <div className="py-12 px-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6 animate-float">
            La NSI pour les nuls expliqué par un nul
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            🚀 Découvre la programmation de façon simple et fun !
            Pas de blabla compliqué, juste des explications claires et des exemples concrets.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <CategoryCard
          title="Python 🐍"
          description="De zéro à héros en Python ! Apprends à coder comme un pro avec des exemples tirés de la vraie vie."
          icon={Code2}
          href="/python"
        />
        <CategoryCard
          title="SQL 📊"
          description="Deviens un maître des bases de données ! Manipule les données comme un expert."
          icon={Database}
          href="/sql"
        />
        <CategoryCard
          title="Autre 💡"
          description="Explore d'autres concepts cool de l'informatique qui vont te faire briller en cours !"
          icon={Lightbulb}
          href="/autre"
        />
      </div>

      <section className="mt-16 rounded-3xl overflow-hidden glass-card p-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 text-center select-none">
          Pourquoi tu vas adorer cette plateforme ?&nbsp;
          <span className="inline-block">🤔</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl hover-card">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Explications Simples</h3>
            <p className="text-gray-600">Plus besoin de se prendre la tête ! On t'explique tout simplement, avec des mots que tu comprends.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl hover-card">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Interactif & Fun</h3>
            <p className="text-gray-600">Apprends en t'amusant ! Des exercices interactifs et des exemples tirés de ton quotidien.</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl hover-card">
            <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-xl mb-3">Fiches de Révision</h3>
            <p className="text-gray-600">Des fiches de révision gratuites pour réviser efficacement avant les contrôles !</p>
          </div>
        </div>
      </section>
    </div>
  );
}