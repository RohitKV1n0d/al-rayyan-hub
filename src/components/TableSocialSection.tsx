import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import logo from '@/assets/al-rayyan-logo.png';

const standings = [
  { pos: 1, club: 'Al Shamal', matches: 6, points: 14, isRayyan: false },
  { pos: 2, club: 'Qatar SC', matches: 6, points: 14, isRayyan: false },
  { pos: 3, club: 'Al Gharafa', matches: 6, points: 13, isRayyan: false },
  { pos: 4, club: 'Al Wakrah', matches: 6, points: 11, isRayyan: false },
  { pos: 5, club: 'Al Rayyan', matches: 6, points: 10, isRayyan: true },
  { pos: 6, club: 'Al Duhail', matches: 6, points: 8, isRayyan: false },
  { pos: 7, club: 'Al Sadd', matches: 6, points: 8, isRayyan: false },
  { pos: 8, club: 'Umm Salal', matches: 6, points: 6, isRayyan: false },
  { pos: 9, club: 'Al Ahli', matches: 6, points: 6, isRayyan: false },
  { pos: 10, club: 'Shanhania', matches: 6, points: 4, isRayyan: false },
  { pos: 11, club: 'Al Arabi', matches: 6, points: 4, isRayyan: false },
  { pos: 12, club: 'Al Sailiya', matches: 6, points: 3, isRayyan: false },
];

export function TableSocialSection() {
  return (
    <section id="table" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* League Table */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">Qatar Stars League</p>
                <h3 className="text-2xl font-bold">Ranking</h3>
              </div>
              <a href="#" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                View Full Table <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-muted-foreground border-b border-border">
                    <th className="pb-3 font-semibold">Pos</th>
                    <th className="pb-3 font-semibold">Club</th>
                    <th className="pb-3 font-semibold text-center">M</th>
                    <th className="pb-3 font-semibold text-right">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, index) => (
                    <motion.tr
                      key={team.club}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className={`border-b border-border/50 transition-colors ${
                        team.isRayyan
                          ? 'bg-primary/10 hover:bg-primary/20'
                          : 'hover:bg-muted-foreground/5'
                      }`}
                    >
                      <td className="py-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          team.pos <= 3
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted-foreground/20 text-muted-foreground'
                        }`}>
                          {team.pos}
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          {team.isRayyan ? (
                            <img src={logo} alt={team.club} className="w-6 h-6" />
                          ) : (
                            <div className="w-6 h-6 bg-muted-foreground/20 rounded-full" />
                          )}
                          <span className={`font-medium ${team.isRayyan ? 'text-primary font-bold' : ''}`}>
                            {team.club}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-center text-muted-foreground">{team.matches}</td>
                      <td className="py-3 text-right font-bold">{team.points}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Social Feed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">Follow Us</p>
                <h3 className="text-2xl font-bold">@AlrayyanSC</h3>
              </div>
              <a
                href="https://twitter.com/AlrayyanSC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
              >
                View on X <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Social Embed Placeholder */}
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-background rounded-xl p-4 border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <img src={logo} alt="Al-Rayyan SC" className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-sm">Al Rayyan SC</span>
                        <span className="text-muted-foreground text-xs">@AlrayyanSC</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item === 1 && "🔴⚪ Match Day! Our team is ready for tonight's clash. Let's go Al-Rayyan! 💪 #AlRayyanSC #QSL"}
                        {item === 2 && "Great training session today! The team is in top form heading into the weekend. ⚽ #WeAreRayyan"}
                        {item === 3 && "Thank you to our amazing fans for the incredible support! Your energy drives us forward. 🙌 #RayyanFamily"}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>❤️ {120 + item * 45}</span>
                        <span>🔄 {20 + item * 12}</span>
                        <span>💬 {5 + item * 3}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Follow Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {['X', 'Instagram', 'YouTube', 'Facebook'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-4 py-2 bg-foreground text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
