"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    console.log('Slug:', slug);  // Kiểm tra giá trị của slug trước khi gọi API
    console.error("Slug is undefined or null");

    const incrementView = async () => {
      try {
        if (!slug) {
          console.error("Slug is undefined or null");
          return;
        }

        // Gọi RPC để tăng số lượt xem
        const { data, error } = await supabase.rpc('increment', {
          slug_text: slug,
        });

        // Log lỗi và dữ liệu trả về từ Supabase
        if (error) {
          console.error("Error from Supabase RPC:", error);
        } else {
          console.log("RPC Data:", data);  // Kiểm tra nếu dữ liệu trả về
        }

        // Log error (nếu có) và xem thông tin chi tiết
        console.log("RPC Error (if any):", error);  // Lỗi từ Supabase
      } catch (error) {
        console.error("An error occurred while incrementing the view count:", error);
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase
  .from('views')
  .select('count')
  .match({slug: slug})
  .single()

        if (error){
            console.error("Error incrementing view count inside try block:", error)
        };


        setViews(data ? data.count : 0)
        
      } catch (error) {
        console.error(
          "An error occurred while incrementing the view count:",
          error
        );
      }
    };

        getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
