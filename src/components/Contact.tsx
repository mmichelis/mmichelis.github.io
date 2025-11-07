import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-primary text-center">Get In Touch</h2>
        
        <Card className="p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground mb-1">Email</div>
                  <a 
                    href="mailto:mike.michelis@ai.ethz.ch" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    mike.michelis@ai.ethz.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground mb-1">Phone</div>
                  <a 
                    href="tel:+41765896672" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +41 76 589 6672
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground mb-1">Location</div>
                  <div className="text-muted-foreground">
                    Zurich, Switzerland
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Feel free to reach out for research collaborations, academic opportunities, 
                or any inquiries about my work.
              </p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  className="w-full gap-2 justify-start"
                  variant="outline"
                  onClick={() => window.open('https://www.linkedin.com/in/mymichelis/', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </Button>
                <Button 
                  className="w-full gap-2 justify-start"
                  variant="outline"
                  onClick={() => window.open('https://scholar.google.com/citations?user=xxCOii8AAAAJ&hl=en', '_blank')}
                >
                  <FileText className="w-4 h-4" />
                  Google Scholar
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
