import React, { useEffect, useState } from "react";

const PexelsImg = ({ productName }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(
            productName
          )}&per_page=1`,
          {
            headers: {
              Authorization:
                "23xBYoTEP1dL4Lk11rRDFaOEhEZekPc04qWkCC2fIpMsbubQuzdAQNbe", // Sustituye con tu clave de Pexels
            },
          }
        );
        const data = await response.json();

        if (data && data.photos.length > 0) {
          setImageUrl(data.photos[0].src.medium); // Usamos la URL de la imagen
        } else {
          setImageUrl("/placeholder.jpg");
          setError(
            "No se encontraron imágenes, mostrando imagen predeterminada."
          );
        }
      } catch (error) {
        setError("Hubo un problema al obtener la imagen.");
        console.error("Error al obtener la imagen:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [productName]);

  if (loading) {
    return <div>Cargando imagen...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <img src={imageUrl} alt={productName} className="productImage" />;
};

export default PexelsImg;
