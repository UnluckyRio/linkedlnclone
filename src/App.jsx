import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileTest from "./components/Test";
import RecommendedSection from "./components/RecommendedSection";
import AnalyticsCard from "./components/AnalyticsCard";
import ActivitySection from "./components/ActivitySection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import InterestsSection from "./components/InterestsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Container className="mt-4 flex-grow-1">
            <Row>
              <Col lg={8} className="mx-auto">
                {/* Componente esistente - Profilo di Anna De Lise */}
                <Routes>
                  <Route path="/" element={<ProfileTest />} />
                </Routes>

                {/* Componente RecommendedSection - Sezione "Consigliato per te" */}
                <RecommendedSection />

                {/* Componente AnalyticsCard per testare la replica dell'immagine */}
                <AnalyticsCard />

                {/* Componente ActivitySection - Sezione "Attività" */}
                <ActivitySection />

                {/* Componente ExperienceSection - Sezione "Esperienza" */}
                <ExperienceSection />

                {/* Componente EducationSection - Sezione "Formazione" */}
                <EducationSection />

                {/* Componente SkillsSection - Sezione "Competenze" */}
                <SkillsSection />

                {/* Componente InterestsSection - Sezione "Interessi" */}
                <InterestsSection />
              </Col>
            </Row>
          </Container>

          {/* Footer component che replica il design di LinkedIn */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
