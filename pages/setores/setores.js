document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".area-card");
    const modal = document.getElementById("modal");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.querySelector(".modal-image");

    const dadosSetores = {
        "Farmacêutica": {
            texto: "A LineSync impulsiona a excelência no setor farmacêutico, garantindo rastreabilidade, conformidade regulatória e eficiência na gestão de dados laboratoriais. Transformamos processos complexos em fluxos inteligentes e auditeis",
            imagem: "assets/imagens/seringa.jpg"
        },
        "Alimentos e Bebidas": {
            texto: "Com foco em segurança, qualidade e controle, a LineSync otimiza a gestão analítica no setor de alimentos e bebidas, assegurando conformidade com normas e oferecendo total rastreabilidade desde a matéria-prima até o produto final.",
            imagem: "assets/imagens/barril.jpg"
        },
        "Química e Processos": {
            texto: "A LineSync suporta operações químicas com alto desempenho, integrando dados, automação e controle de processos para maior precisão, produtividade e tomada de decisão baseada em informações confiáveis.",
            imagem: "assets/imagens/chem.jpg"
        },
        "Ambiental": {
            texto: "No setor ambiental, a LineSync fortalece a confiabilidade de análises e monitoramentos, facilitando a geração de relatórios, rastreabilidade e conformidade normativa para laboratórios e órgãos de controle.",
            imagem: "assets/imagens/ambiental.jpg"
        },
        "Assistência Médica": {
            texto: "Para laboratórios clínicos e instituições de saúde, a LineSync gera eficiência, segurança e rastreabilidade, melhorando tempos de resposta e garantindo confiança em resultados que impactam vidas.",
            imagem: "assets/imagens/sangue.jpg"
        },
        "Mineração e Metais": {
            texto: "A LineSync capacita o setor de mineração e metais com controle analítico robusto, rastreamento preciso e automação que suportam operações industriais em ambientes críticos, elevando qualidade, segurança e tomada de decisão.",
            imagem: "assets/imagens/carbon.jpg"
        }
    };

    cards.forEach(card => {
        card.addEventListener("click", () => {

            const title = card.querySelector(".card-nome").innerText;
            const imgSrc = card.querySelector(".card-img img").src;

            modalTitle.innerText = title;

            const imagemModal = dadosSetores[title]?.imagem ?? imgSrc;
            modalImage.style.backgroundImage = `url('${imagemModal}')`;

            modalDescription.innerText = dadosSetores[title]?.texto ?? "";

            modal.style.display = "flex";
        });
    });

    modalClose.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});