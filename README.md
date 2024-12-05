# CI/CD Build SEO Optimized Personal Blog with Next.js, Contentlayer, and Tailwind CSS

### Refer code:
- ✏️ Starter Code: https://github.com/codebucks27/Nextjs-contentlayer-blog
- ✏️ Final Code: https://github.com/codebucks27/Nextjs-tailwindcss-blog-template

### Increment View function:
```
CREATE OR REPLACE FUNCTION increment(slug_text text)
RETURNS VOID AS $$
DECLARE view_id int;
BEGIN
    SELECT id INTO view_id FROM views WHERE slug = slug_text LIMIT 1;

    IF view_id IS NOT NULL THEN
        UPDATE views SET count = count + 1 WHERE id = view_id;
    ELSE
        INSERT INTO views (slug, count) values (slug_text, 1);
    END IF;
END;
$$ LANGUAGE plpgsql;
```

### READ POLICY:
```
create policy "Enable read access for anon"
on "public"."views"
as PERMISSIVE
for SELECT
to anon
using (true);
```

### INSERT POLICY:
```
create policy "Enable insert for anon users only"
on "public"."views"
as PERMISSIVE
for INSERT
to anon
with check (true);
```