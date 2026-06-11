import jsPDF from "jspdf";

export const exportTextPDF = (
  title,
  content
) => {
  const pdf = new jsPDF();

  const lines =
    pdf.splitTextToSize(
      content,
      180
    );

  pdf.setFontSize(18);

  pdf.text(
    title,
    10,
    20
  );

  pdf.setFontSize(12);

  pdf.text(
    lines,
    10,
    35
  );

  pdf.save(
    `${title}.pdf`
  );
};