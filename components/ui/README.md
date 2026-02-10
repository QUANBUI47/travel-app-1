# ViVu App — UI Components

Bộ component dùng chung cho app, **tương đương HeroUI** trên web. Cùng design system (doc/DESIGN_SYSTEM.md).

## Danh sách component

| Component | Mô tả |
|-----------|--------|
| **Button** | Nút: variant (solid, flat, bordered, ghost), color (primary, secondary, default, destructive), size |
| **Card** | Thẻ: Card, CardHeader, CardBody |
| **Input** | Ô nhập: label, startContent, endContent, error |
| **Link** | Link điều hướng (Expo Router): href, color, size |
| **Spacer** | Khoảng cách: size (token hoặc số), horizontal |
| **Badge** | Nhãn nhỏ: color, variant (solid/flat), size |
| **Chip** | Tag có thể chọn/bỏ: selected, onPress, onClose, leftIcon, rightIcon |
| **Avatar** | Ảnh đại diện: source, name (fallback chữ cái), size (sm/md/lg) |
| **Divider** | Đường kẻ: orientation (horizontal/vertical), spacing |
| **Skeleton** | Placeholder loading: width, height, borderRadius |
| **ListItem** | Hàng trong list: leftContent, rightContent, onPress, showDivider |
| **Tabs** | Tab bar: items, selectedKey, onSelectionChange, fullWidth |
| **ImageCard** | Card ảnh trên + nội dung dưới (khách sạn, điểm đến): source, aspectRatio, onPress |
| **Container** | Layout: padding, safeTop, safeBottom |
| **Switch** | Công tắc bật/tắt |
| **Spinner** | Loading spinner: size (sm/md/lg) |
| **SearchBar** | Ô tìm kiếm: searchIcon, placeholder, ...Input props |
| **Select** | Chọn 1 option: label, options, value, onValueChange |

## Cách dùng

```tsx
import {
  Button, Card, CardHeader, CardBody, Input, Link, Spacer,
  Badge, Chip, Avatar, Divider, Skeleton, ListItem, Tabs,
  ImageCard, Container, Switch, Spinner, SearchBar, Select,
} from "@/components/ui";
import { ThemedText } from "@/components/themed-text";
import { Search, MapPin } from "lucide-react-native";

// Button
<Button variant="solid" color="primary">Đặt phòng</Button>

// Card
<Card>
  <CardHeader>Tiêu đề</CardHeader>
  <CardBody><ThemedText>Nội dung</ThemedText></CardBody>
</Card>

// Input
<Input label="Email" placeholder="email@example.com" />

// Badge / Chip
<Badge color="primary" variant="flat">Mới</Badge>
<Chip selected onPress={() => {}}>Đà Nẵng</Chip>

// Avatar
<Avatar name="Nguyễn Văn A" size="md" />

// ListItem
<ListItem leftContent={<Avatar name="A" size="sm" />} rightContent={<ChevronRight />} onPress={...}>
  <ThemedText>Khách sạn ABC</ThemedText>
</ListItem>

// Tabs
<Tabs items={[{ key: "a", title: "Khách sạn" }, { key: "b", title: "Tour" }]} selectedKey={key} onSelectionChange={setKey} />

// ImageCard (hotel / destination)
<ImageCard source={{ uri: "..." }} aspectRatio={3/2}>
  <ThemedText type="subtitle">Tên khách sạn</ThemedText>
  <ThemedText>Mô tả ngắn</ThemedText>
</ImageCard>

// Container
<Container safeTop safeBottom><ThemedText>Nội dung</ThemedText></Container>

// Switch / Spinner
<Switch value={on} onValueChange={setOn} />
<Spinner size="md" />

// SearchBar
<SearchBar searchIcon={<Search size={20} color={muted} />} placeholder="Tìm điểm đến..." />

// Select
<Select
  label="Thành phố"
  options={[{ value: "dn", label: "Đà Nẵng" }]}
  value={city}
  onValueChange={setCity}
/>
```

## Token

Màu, spacing, radius: `@/constants/theme`. Font: Be Vietnam Pro. Icon: Lucide (`lucide-react-native`).
